import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Isencstick - Fragrance of Purity";
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Footer />
    </div>
  );
}

export default App;