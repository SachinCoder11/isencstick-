import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer id="contact" className="bg-amber-950 text-amber-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Isencstick</h2>
            <p className="mb-4 text-amber-200/80 leading-relaxed">
              Crafting premium incense sticks with love and care since 1995. 
              Bringing peace and harmony to homes around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Services', 'About Us', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-amber-200/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>info@isencstick.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Fragrance Street, Aroma City, Incense Land - 56789</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Subscribe</h3>
            <p className="mb-4 text-amber-200/80">
              Join our newsletter to receive updates on new products and special offers.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  className="p-2 bg-amber-900/50 text-white placeholder-amber-200/50 border border-amber-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500 flex-grow"
                />
                <button 
                  type="submit"
                  className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {isSubmitted && (
                <div className="absolute -bottom-8 left-0 right-0 flex items-center gap-2 text-green-400 animate-fadeIn">
                  <CheckCircle size={16} />
                  <span className="text-sm">Successfully subscribed!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-amber-900 text-center text-amber-200/60">
          <p>&copy; {new Date().getFullYear()} Isencstick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;