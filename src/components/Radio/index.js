import React from 'react';
import './index.less';
import PropTypes from 'prop-types';



class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.defaultChecked
        }
    }



    render() {
        
        const { checked } = this.state;
        const { defaultChecked } = this.props;
        console.log(defaultChecked);

        return (
            <label className="cxc-radio">
                <input type="radio" defaultChecked={defaultChecked} />
                <span></span>
                <b>{this.props.children}</b>
            </label>
        )
    }
}

Radio.propTypes = {
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.any,
}

Radio.defaultProps = {
    defaultChecked: false,
    checked: false,

}


export default Radio;