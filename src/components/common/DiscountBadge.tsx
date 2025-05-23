import React from 'react';

interface DiscountBadgeProps {
  discount: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ 
  discount, 
  size = 'md',
  className = '' 
}) => {
  if (!discount || discount <= 0) return null;
  
  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2 py-1',
    lg: 'text-base px-3 py-1.5',
  };
  
  return (
    <div className={`inline-flex items-center justify-center bg-[#e99b0e] text-white font-semibold rounded-md ${sizeClasses[size]} ${className}`}>
      -{discount}%
    </div>
  );
};

export default DiscountBadge;