import React, { useState } from 'react';
import { CreditCard, Truck, MapPin } from 'lucide-react';

interface CheckoutProcessProps {
  totalAmount: string;
  onClose: () => void;
  onOrderComplete: () => void;
}

const CheckoutProcess: React.FC<CheckoutProcessProps> = ({ totalAmount, onClose, onOrderComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      onOrderComplete();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-800 mb-6">
              <MapPin size={24} />
              <h3 className="text-xl font-serif">Shipping Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="col-span-2 p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="col-span-2 p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                className="col-span-2 p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-800 mb-6">
              <Truck size={24} />
              <h3 className="text-xl font-serif">Shipping Method</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border border-amber-200 rounded-lg cursor-pointer hover:bg-amber-50">
                <input type="radio" name="shipping" value="standard" defaultChecked />
                <div>
                  <p className="font-medium">Standard Shipping</p>
                  <p className="text-sm text-gray-600">3-5 business days</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 border border-amber-200 rounded-lg cursor-pointer hover:bg-amber-50">
                <input type="radio" name="shipping" value="express" />
                <div>
                  <p className="font-medium">Express Shipping</p>
                  <p className="text-sm text-gray-600">1-2 business days</p>
                </div>
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-800 mb-6">
              <CreditCard size={24} />
              <h3 className="text-xl font-serif">Payment Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="col-span-2 p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-amber-900">Checkout</h2>
            <div className="text-amber-900 font-bold">Total: {totalAmount}</div>
          </div>

          <div className="mb-8">
            <div className="flex items-center">
              {[1, 2, 3].map((number) => (
                <React.Fragment key={number}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= number ? 'bg-amber-700 text-white' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {number}
                  </div>
                  {number < 3 && (
                    <div className={`flex-1 h-1 ${
                      step > number ? 'bg-amber-700' : 'bg-amber-100'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 text-amber-700 hover:text-amber-800 transition-colors"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full transition-colors font-medium ml-auto"
              >
                {step === 3 ? 'Place Order' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProcess;