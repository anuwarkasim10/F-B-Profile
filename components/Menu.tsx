
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import FlavorAssistant from './FlavorAssistant';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'main' | 'side' | 'combo'>('all');

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Explore Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display text-secondary">Our Signature Selection</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From quick snacks to family-sized feasts, we have something to satisfy every craving.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'main', 'side', 'combo'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-2 rounded-full font-bold transition-all border-2 ${
                filter === cat 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-primary/50'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full font-bold text-primary shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{item.name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                <a 
                  href="#order"
                  className="inline-block text-primary font-bold text-sm border-b-2 border-transparent hover:border-primary transition-all pt-2"
                >
                  Add to order &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* AI Integration */}
        <div className="mt-20">
          <FlavorAssistant />
        </div>
      </div>
    </section>
  );
};

export default Menu;
