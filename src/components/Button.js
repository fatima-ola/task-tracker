import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {text, className} = props;
    return (
        <div>
            <button className={className}>{text}</button> 
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
