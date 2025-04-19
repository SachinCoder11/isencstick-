import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import SectionTitle from './SectionTitle';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
}

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/4017629/pexels-photo-4017629.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Sandalwood Bliss",
      description: "Our premium sandalwood incense sticks offer a rich, woody aroma that creates a calming atmosphere perfect for meditation and relaxation.",
      price: "$12.99"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/8284781/pexels-photo-8284781.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Lavender Dreams",
      description: "These lavender-infused incense sticks deliver a soothing floral scent that helps reduce anxiety and promotes restful sleep.",
      price: "$10.99"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/4017643/pexels-photo-4017643.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Citrus Elegance",
      description: "A refreshing blend of citrus essences that energizes your space and uplifts your mood with bright, invigorating notes.",
      price: "$11.99"
    }
  ];

  return (
    <section id="products" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Our Premium Collection</SectionTitle>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Discover our carefully crafted incense sticks made with 100% natural ingredients. 
          Each product is handmade with love to bring peace and harmony to your home.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              onBuyNow={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetail
          {...selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Products;