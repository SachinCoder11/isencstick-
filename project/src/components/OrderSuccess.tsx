import React from 'react';
import { CheckCircle } from 'lucide-react';

interface OrderSuccessProps {
  onClose: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center animate-slideUp">
        <div className="mb-6 text-amber-700 flex justify-center">
          <CheckCircle size={64} className="animate-[scale_0.5s_ease-in-out]" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>
        <button
          onClick={onClose}
          className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full transition-colors font-medium"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;