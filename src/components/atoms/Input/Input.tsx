import React from 'react';

const Input = ({ className = "", ...props }) => {
    return <input className={`w-full px-3 py-2 border-[#1c274c] border-[1px] focus:ring focus:ring-blue-300 text-[#1c274c] ${className}`} {...props} />;
};

export default Input;