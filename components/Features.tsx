
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display leading-tight">We Offer the Best Experience for Your Taste Buds</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              It's not just about the food; it's about the consistency, the speed, and the friendly faces that make FlavorPro a local favorite.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-2xl">
                    ✨
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative">
             <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" 
              alt="Kitchen workflow" 
              className="rounded-3xl shadow-2xl border-4 border-white/10"
            />
            {/* Absolute element */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
