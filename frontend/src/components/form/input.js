import React from 'react';
import PropTypes from 'prop-types';

const Input = props  => {
    return (
        <input 
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"    
            type="text"
            {...props}
        />
    ); 
};
 Input.propTypes = {
    
};

export default Input;