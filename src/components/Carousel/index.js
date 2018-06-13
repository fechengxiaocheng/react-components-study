import React from 'react';
import './index.less';
import PropTypes from 'prop-types';

class  Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.childrenLen = this.props.children.length;
        
        this.state = {
            slideWidth: '',
            curIndex: 0,
            left: 0,
            isTransition: true
        }
    }
    componentDidMount() {
        this.setWidth();
        this.props.autoPlay && this.autoPlay();
    }

    setWidth() {
        const width = this.refs.list.clientWidth;
        this.setState({
            slideWidth: width,
            left: -width
        })
        
    }

    autoPlay() {
        // 定时器，每3s换一页
        setInterval(() => { 
            const { curIndex } = this.state;
            const newIndex = curIndex >= (this.props.children.length - 1) ? 0 : curIndex + 1;
            this.changeTab(newIndex);
            
        },3000);
        
    }
    
    changeTab(newIndex) {
        this.props.beforeChange(newIndex);
        const { curIndex, slideWidth } = this.state;
        const isLastToFirst = curIndex === this.childrenLen - 1 && newIndex === 0;
        const isFirstToLast = curIndex === 0 && newIndex === this.childrenLen - 1;
        let left = '';
        this.setState({
            isTransition: true
        })
        if (isLastToFirst) {
            // 从最后一页到第一页 
            left = -slideWidth * (curIndex + 2);
        }
        else if (isFirstToLast) {
            // 从第一页到最后一页
            left = 0
        }
        else {
            left = -slideWidth * (newIndex + 1);
        }
        this.setState({
            left: `${left}px`
        },() => {
            // 在滑动0.4s之后把transition动画关掉，把left设置成clone元素对应的初始元素
            setTimeout(() => {
                if (isLastToFirst) {
                    this.setState({
                        isTransition: false,
                        left: -slideWidth
                    });
                }
                else if (isFirstToLast) {
                    this.setState({
                        isTransition: false,
                        left: this.childrenLen * -slideWidth
                    });
                }
            },400)
            
            this.props.afterChange(curIndex, newIndex);
            this.setState({
                curIndex: newIndex
            })
        })
        
    }
    render() {
        const { slideWidth, curIndex, left, isTransition } = this.state;
        const { dots, children } = this.props;
        return (
            <div className="cxc-carousel">
                <div className="slider-list" ref="list">
                    <div className={`slider-track ${isTransition ? 'transition' : ''}`} ref="track" style={{ width: slideWidth * (this.childrenLen + 2), left: left}}>
                        <div style={{width: slideWidth }} className="slider-item slider-clone">
                            {children[this.childrenLen - 1]}
                        </div>
                        {
                            children.map((item, index) => {
                                return (
                                    <div style={{width: slideWidth }} key={index} className="slider-item">
                                        {item}
                                    </div>
                                )
                            })
                        }
                        <div style={{width: slideWidth }} className="slider-item slider-clone">
                            {children[0]}
                        </div>
                    </div>
                    {
                        dots && 
                        <ul>
                            {
                                children.map((item, index) => {
                                    return (
                                        <li key={index} className={index === curIndex ? 'active' : ''} onClick={()=>this.changeTab(index)}></li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
                
            </div>
        )
    }
}

Carousel.propTypes = {
    afterChange: PropTypes.func,
    beforeChange: PropTypes.func,
    autoplay: PropTypes.bool,
    dots: PropTypes.bool,
    easing: PropTypes.string, // todo
    effect: PropTypes.string, // todo
    vertical: PropTypes.bool // todo
}

Carousel.defaultProps = {
    afterChange: () => {},
    beforeChange: () => {},
    autoplay: false,
    dots: true,
    easing: 'linear',
    effect: 'scrollx', //scrollx,fade
    vertical: false,
}

export default Carousel;
