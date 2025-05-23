import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onDecrease();
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onIncrease();
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md w-28">
      <button
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= min}
        className={`flex items-center justify-center w-8 h-8 ${
          quantity <= min ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
        }`}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <div className="flex-1 text-center">
        <span className="text-sm font-medium">{quantity}</span>
      </div>
      <button
        type="button"
        onClick={handleIncrease}
        disabled={quantity >= max}
        className={`flex items-center justify-center w-8 h-8 ${
          quantity >= max ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
        }`}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;