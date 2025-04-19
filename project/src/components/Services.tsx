import React from 'react';
import ServiceBox from './ServiceBox';
import SectionTitle from './SectionTitle';
import { Leaf, Award, Truck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Handmade with Care",
      description: "Each incense stick is carefully handcrafted by our skilled artisans following ancient traditions and techniques.",
      icon: Leaf
    },
    {
      id: 2,
      title: "100% Natural Ingredients",
      description: "We use only the finest natural ingredients sourced ethically to ensure purity and authentic fragrances.",
      icon: Award
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Enjoy the convenience of quick delivery to your doorstep, with careful packaging that preserves every fragrance note.",
      icon: Truck
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-cover bg-center text-white"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/4017637/pexels-photo-4017637.jpeg?auto=compress&cs=tinysrgb&w=1600')"
      }}
    >
      <div className="absolute inset-0 bg-amber-950/80"></div>
      
      <div className="container mx-auto px-4 relative">
        <SectionTitle light>Our Premium Services</SectionTitle>
        
        <p className="text-center text-amber-100 max-w-3xl mx-auto mb-12">
          At Isencstick, we're committed to providing exceptional quality and service.
          Discover the values that set our products apart.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceBox
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;