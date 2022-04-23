import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
        children, 
        type = 'button', 
        className, 
        variant, 
        ...props 
    }) => {

    const bgVariant = {
        danger: 'red-600',
        primary: 'black',
        warning: 'yellow-400',
        success: 'green-500',
    }

    return (
        <button 
            className={`${
                props.disabled 
                    ? 'bg-gray-600' 
                    : `bg-${bgVariant[variant] ?? 'black'}`
            } hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                className || ''
            }`} 
            type={type} 
            {...props}>
            {children}
        </button>

    );
};

Button.propTypes = {
    
};

export default Button;