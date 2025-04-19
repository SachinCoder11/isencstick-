import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  onBuyNow: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, price, onBuyNow }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-amber-900 mb-2">{name}</h3>
        
        <p className="text-gray-600 mb-4 h-20 overflow-hidden">{description}</p>
        
        <div className="flex justify-between items-center gap-4">
          <span className="text-amber-800 font-bold text-lg">{price}</span>
          
          <div className="flex gap-2">
            <button 
              onClick={onBuyNow}
              className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-full transition-colors font-medium"
            >
              Buy Now
            </button>
            <button className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-4 py-2 rounded-full transition-colors font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;