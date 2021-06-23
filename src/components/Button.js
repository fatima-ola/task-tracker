import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {text, className, handleClick} = props;
    return (
        <div>
            <button className={className} onClick={handleClick}>{text}</button> 
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    handleClick: PropTypes.func,
}

export default Button
