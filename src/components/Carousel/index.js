import React from 'react';
import './index.less';
import PropTypes from 'prop-types';

class  Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            trackWidth: '',
            slideWidth: '',
            curIndex: 0,
            transform: 0
        }
    }
    componentDidMount() {
        this.setWidth();
        this.props.autoPlay && this.autoPlay();
    }

    setWidth() {
        const width = this.refs.list.clientWidth;
        const length = this.props.children.length;
        this.setState({
            trackWidth: width * (length + 1),
            slideWidth: width
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
        const { curIndex } = this.state;
        let left = '';
        if (curIndex === 3 && newIndex === 0) {
            // 从最后一页到第一页
            left = parseInt(this.state.slideWidth * (curIndex + 1), 10) * -1;
            
        }
        else {
            left = parseInt(this.state.slideWidth * newIndex, 10) * -1;
        }
        this.setState({
            transform: `${left}px`
        },() => {
            
            this.props.afterChange(curIndex, newIndex);
            this.setState({
                curIndex: newIndex
            })
        })
        
    }
    render() {
        const { trackWidth, slideWidth, curIndex, transform } = this.state;
        console.log('transform...',transform);
        const { dots, children } = this.props;
        return (
            <div className="cxc-carousel">
                <div className="slider-list" ref="list">
                    <div className="slider-track" ref="track" style={{ width: trackWidth, left: transform}}>
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
