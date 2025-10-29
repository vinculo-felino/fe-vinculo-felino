import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button'
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-vf-pink text-white font-fredoka text-lg py-3 px-10 rounded-xl shadow-lg transition duration-200 w-auto hover:bg-opacity-90 ${className}`}
  >
    {children}
  </button>
);

