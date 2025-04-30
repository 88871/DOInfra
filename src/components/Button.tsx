import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  className = '',
  variant = 'primary',
  size = 'md'
}) => {
  const baseStyles = "inline-flex items-center justify-center border border-transparent rounded-md shadow-sm focus:outline-none transition-all duration-200";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base"
  };
  
  const variantStyles = {
    primary: "font-medium text-white bg-blue-600 hover:bg-blue-700 border-blue-800/30", 
    secondary: "font-semibold tracking-wide text-white bg-blue-700 hover:bg-blue-800 border-blue-900/30",
    outline: "font-medium text-blue-700 bg-white hover:bg-blue-50 border-blue-300"
  };
  
  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button; 