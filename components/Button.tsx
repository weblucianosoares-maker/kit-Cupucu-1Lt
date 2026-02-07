import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCT_LINK } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = "", 
  variant = 'primary', 
  fullWidth = false,
  icon = true 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-bold uppercase tracking-wide transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white border-2 border-transparent",
    secondary: "bg-brand-darkBrown hover:bg-brand-brown text-white border-2 border-transparent",
    outline: "bg-transparent border-2 border-brand-darkBrown text-brand-darkBrown hover:bg-brand-darkBrown hover:text-white"
  };

  const widthClass = fullWidth ? "w-full py-4 text-lg md:text-xl" : "px-8 py-3 text-base md:text-lg";

  return (
    <a 
      href={PRODUCT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 animate-pulse" />}
    </a>
  );
};

export default Button;