import React from "react"
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({
    title,
    size = 'medium',
    shape = 'rounded-md',
    onClick,
    className = "",
    styles = ""
}) => {
    const sizeClasses = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-lg': 'rounded-lg',
        'rounded-full': 'rounded-full'
    };

    const baseClasses = 'bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 cursor-pointer';

    const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${className} ${styles}`;

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;