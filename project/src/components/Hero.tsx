import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/4017637/pexels-photo-4017637.jpeg?auto=compress&cs=tinysrgb&w=1600')"
      }}
    >
      <div className="absolute inset-0 bg-amber-950/60"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 tracking-wide animate-fadeIn">
            Fragrance of Purity
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-50 mb-8 leading-relaxed animate-fadeIn animation-delay-200">
            Experience the divine essence of nature with our handcrafted incense sticks, 
            meticulously created to bring peace and harmony to your space.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-400">
            <a 
              href="#products" 
              className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Products
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-full transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;