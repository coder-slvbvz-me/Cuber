import React from 'react';
const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
};
const Button = ({ children, variant = "default", className = "", ...props }: { children: React.ReactNode; variant?: keyof typeof variants; className?: string; }) => {
    const base = "px-4 py-2 rounded-md font-medium transition";

    return <button className={`${base} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>{children}</button>;
};

export default Button;