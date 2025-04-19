import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import CheckoutProcess from './CheckoutProcess';
import OrderSuccess from './OrderSuccess';

interface ProductDetailProps {
  image: string;
  name: string;
  description: string;
  price: string;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ image, name, description, price, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const basePrice = parseFloat(price.replace('$', ''));
  const totalPrice = (basePrice * quantity).toFixed(2);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const handleOrderComplete = () => {
    setShowCheckout(false);
    setShowOrderSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowOrderSuccess(false);
    onClose();
  };

  if (showOrderSuccess) {
    return <OrderSuccess onClose={handleCloseSuccess} />;
  }

  if (showCheckout) {
    return (
      <CheckoutProcess
        totalAmount={`$${totalPrice}`}
        onClose={() => setShowCheckout(false)}
        onOrderComplete={handleOrderComplete}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-serif font-bold text-amber-900">{name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Quantity:</span>
                  <div className="flex items-center gap-3 bg-amber-50 rounded-full">
                    <button 
                      onClick={handleDecrement}
                      className="p-2 hover:text-amber-700 transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button 
                      onClick={handleIncrement}
                      className="p-2 hover:text-amber-700 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Total Price:</p>
                    <p className="text-2xl font-bold text-amber-900">${totalPrice}</p>
                  </div>
                  <button 
                    onClick={() => setShowCheckout(true)}
                    className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full transition-colors font-medium"
                  >
                    Proceed to Checkout
                  </button>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-medium text-amber-900 mb-2">Product Details:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 100% natural ingredients</li>
                    <li>• Hand-crafted by expert artisans</li>
                    <li>• Long-lasting fragrance</li>
                    <li>• Pack of 20 sticks</li>
                    <li>• Burn time: ~45 minutes per stick</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;