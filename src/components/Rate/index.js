import React from 'react';
import PropTypes from 'prop-types';
import './index.less'

class Rate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
            oldValue: this.props.defaultValue, // 用来存hover之前的value
            order: '' // 当前选中的是first||second
        }
    }
    

    changeCharacter(e, type) {
        const order = e.target.parentNode.getAttribute('data-order');
        const index = +e.target.parentNode.parentNode.getAttribute('data-index');
        if (this.props.disabled || 
            (type === 'mouseMove' && order === this.state.order) || 
            index === null || 
            order === null) {
            return;
        }
        const value = order === 'first' ? index + 1 : index + 0.5;

        if (this.props.allowClear && value === this.state.oldValue && type === 'click') {
            
            this.setState({
                value: 0,
                oldValue: 0
            })
        }
        else if (type === 'mouseLeave') {
            this.setState({
                value: this.state.oldValue
            })
        }
        else if (type === 'mouseEnter' || type === 'mouseMove'){

            this.setState({
                value
            })
        }
        else {
            this.setState({
                value,
                oldValue: value
            })
        }
        this.setState({
            order
        })

        
    }
    render() {
        const { allowHalf, count, character, style, disabled, className} = this.props;
        const { value } = this.state;
        const isString = (typeof character === 'string');
        return (
            <div className="cxc-rate">
                <ul 
                onClick={(e) => this.changeCharacter(e,'click')} 
                onMouseEnter={(e) => this.changeCharacter(e,'mouseEnter')} 
                onMouseMove={(e) => this.changeCharacter(e,'mouseMove')} 
                onMouseLeave={(e) => this.changeCharacter(e,'mouseLeave')}>
                    {
                        new Array(count).fill(1).map((item, index) => {
                            return (
                                <li key={index} data-index={index} style={{...style}}  className={`${className}${disabled ? ' default' : ''}`}>
                                    <div data-order="first" className={`first${index < (allowHalf ? Math.floor(value) : value) ? ' active': ''}`} >
                                        {   isString ?
                                            <span>{character}</span> :
                                            character
                                            
                                        }
                                    </div>
                                    <div data-order="second" className={`second${index < Math.ceil(value) ? ' active': ''}`} >
                                        {   isString ?
                                            <span>{character}</span> :
                                            character
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

Rate.propTypes = {
    allowClear: PropTypes.bool,
    allowHalf: PropTypes.bool,
    character: PropTypes.node,
    count: PropTypes.number,
    style: PropTypes.object,
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
    className: PropTypes.string,
}

Rate.defaultProps = {
    allowClear: true,
    allowHalf: false,
    character: '谢',
    count: 5,
    defaultValue: 0,
    disabled: false,

}


export default Rate;