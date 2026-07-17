import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'secondary';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
    const baseStyles = 'px-4 py-2 rounded-md focus:outline-none cursor-pointer';
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-600/80 font-bold py-3 px-6 transition duration-300 text-xl',
        outline: 'bg-none border-1 border border-zinc-600 hover:bg-gray-800/80 text-white font-bold py-3 px-6 transition duration-300 text-xl',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 font-bold py-3 px-6 transition duration-300 text-xl',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;