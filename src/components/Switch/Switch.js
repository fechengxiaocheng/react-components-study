import React from 'react';
import './Switch.less';
import PropTypes from 'prop-types';

class Switch extends React.Component {
    
   

    
    
    render() {
        const { defaultChecked, disabled, autoFocus, onChange, checkedChildren, unCheckedChildren} = this.props;
        return  (
           
            <label className="c-switch">
                <input type="checkbox" 
                    ref="input"
                    defaultChecked={defaultChecked} 
                    disabled={disabled}
                    autoFocus={autoFocus}
                    //checked={checked} 
                    onChange={(e) => onChange(e.target.checked)}
                    />
                <span className="c-slider"></span>
                {
                    checkedChildren && 
                    <span className="c-slider-left-text">{checkedChildren}</span>
                }
                {
                    unCheckedChildren && 
                    <span className="c-slider-right-text">{unCheckedChildren}</span>
                }
                
                
            </label>
        )
       
    }
}

Switch.propTypes = {
    autoFocus: PropTypes.bool, // 没好。。。。。
    checked: PropTypes.bool,
    checkedChildren: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    size: PropTypes.string, // default,small
    unCheckedChildren: PropTypes.string,
    onChange: PropTypes.func
}
Switch.defaultProps = {
    autoFocus: false,
    checked: false,
    //checkedChildren: '',
    defaultChecked: false,
    disabled: false,
    loading: false,
    size: 'default', // default,small
    //unCheckedChildren: <div></div>,
    onChange: () => {}
}

export default Switch;


