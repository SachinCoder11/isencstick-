import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, light = false }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-3 ${light ? 'text-white' : 'text-amber-900'}`}>
        {children}
      </h2>
      
      <div className={`w-24 h-1 mx-auto rounded ${light ? 'bg-amber-500' : 'bg-amber-600'}`}></div>
    </div>
  );
};

export default SectionTitle;