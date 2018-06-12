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
        }
    }
    componentDidMount() {
        
        this.setWidth();
    }

    setWidth() {
        const width = this.refs.list.clientWidth;
        const length = this.props.children.length;
        this.setState({
            trackWidth: width * length,
            slideWidth: width
        })
        
    }

    changeTab(newIndex) {
        console.log(newIndex);
        this.props.beforeChange(newIndex);
        const { curIndex } = this.state;
        this.props.afterChange(curIndex, newIndex);
        this.setState({
            curIndex: newIndex
        })
    }
    render() {
        const { trackWidth, slideWidth, curIndex } = this.state;
        const { dots, children } = this.props;
        return (
            <div className="cxc-carousel">
                <div className="slider-list" ref="list">
                    <div className="slider-track" ref="track" style={{ width: trackWidth}}>
                        {
                            children.map((item, index) => {
                                return (
                                    <div style={{width: slideWidth }} key={index} className="slider-item">
                                        {item}
                                    </div>
                                )
                            })
                        }
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
    easing: PropTypes.string,
    effect: PropTypes.string,
    vertical: PropTypes.bool
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
