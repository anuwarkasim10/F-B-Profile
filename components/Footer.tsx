
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold font-display text-primary">Flavor</span>
              <span className="text-2xl font-bold font-display text-white">Pro</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We serve the freshest ingredients with a side of love. Join us for a meal you won't forget.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.facebook} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">f</a>
              <a href={BUSINESS_INFO.instagram} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">ig</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Our Menu</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#order" className="hover:text-primary transition-colors">Order Now</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{BUSINESS_INFO.address}</li>
              <li>{BUSINESS_INFO.phone}</li>
              <li>{BUSINESS_INFO.email}</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>10am - 10pm</span></li>
              <li className="flex justify-between"><span>Sat - Sun:</span> <span>11am - 11pm</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
