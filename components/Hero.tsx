
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm tracking-wide">
            🍔 NEW ARRIVALS EVERY WEEK
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-secondary">
            Fresh, Delicious Food for Your <span className="text-primary">Cravings</span> & Events
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            We serve quality food for dine-in, takeaway, and events. Experience flavor that brings everyone together.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-accent transition-all shadow-lg shadow-primary/30"
            >
              View Menu
            </a>
            <a 
              href="#order" 
              className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg shadow-secondary/20"
            >
              Order Now
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" 
              alt="Delicious food spread" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">Customer Rating</p>
              <p className="text-lg font-bold">4.9/5 (1k+ reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
