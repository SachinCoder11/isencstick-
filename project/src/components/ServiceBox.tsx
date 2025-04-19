import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceBoxProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 shadow-lg">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 text-white mb-4">
        <Icon size={32} />
      </div>
      
      <h3 className="text-xl font-serif font-semibold text-white mb-3">{title}</h3>
      
      <p className="text-amber-100">{description}</p>
    </div>
  );
};

export default ServiceBox;