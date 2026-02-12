
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop" 
              alt="Kitchen prep" 
              className="rounded-2xl h-64 w-full object-cover mt-8 shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop" 
              alt="Dining atmosphere" 
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase italic">The FlavorPro Story</h2>
            <h3 className="text-4xl font-bold font-display text-secondary">Passionate About Serving Delicious Meals Fresh Daily</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded on the belief that good food has the power to build communities, FlavorPro started as a small local kitchen. Today, we're proud to serve individuals, families, and high-profile events with the same love and care.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We never compromise on quality. Every ingredient is hand-picked, every recipe is perfected, and every plate is served with a smile.
            </p>
            <div className="pt-4 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-500 font-medium">Unique Recipes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5k+</p>
                <p className="text-sm text-gray-500 font-medium">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-500 font-medium">Fresh Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
