import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants.ts';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Order', href: '#order' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold font-display text-primary">Flavor</span>
          <span className="text-2xl font-bold font-display text-secondary">Pro</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={BUSINESS_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-accent transition-all transform hover:scale-105"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Nav Button (Simplified) */}
        <div className="md:hidden">
          <a 
            href={BUSINESS_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary p-2 rounded-full text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;