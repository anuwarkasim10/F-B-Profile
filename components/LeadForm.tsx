import React, { useState } from 'react';
import { LeadFormData } from '../types.ts';
import { MENU_ITEMS, BUSINESS_INFO } from '../constants.ts';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    foodChoice: MENU_ITEMS[0].name,
    quantity: 1,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="order" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Place an Order</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display text-secondary leading-tight">Make an Enquiry or Start Your Order</h3>
            <p className="text-gray-500 text-lg">
              Planning an event or just hungry for dinner? Fill out the form below and we'll get back to you immediately.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-primary">📞</div>
                <div>
                  <p className="text-sm text-gray-400 font-bold">Phone Support</p>
                  <p className="text-xl font-bold text-secondary">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-primary">📍</div>
                <div>
                  <p className="text-sm text-gray-400 font-bold">Location</p>
                  <p className="text-xl font-bold text-secondary">{BUSINESS_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 md:p-12 rounded-[2rem] shadow-xl border border-primary/10 relative overflow-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl">🎉</div>
                <h4 className="text-3xl font-bold text-secondary">Inquiry Received!</h4>
                <p className="text-gray-600">We've received your order request for {formData.foodChoice}. Our team will contact you at {formData.phone} shortly!</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-accent transition-all"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/50 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/50 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary">Select Food Item</label>
                  <select 
                    name="foodChoice"
                    value={formData.foodChoice}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/50 transition-all outline-none appearance-none"
                  >
                    {MENU_ITEMS.map(item => (
                      <option key={item.id} value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary">Special Requirements / Message</label>
                  <textarea 
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your order..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/50 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                  </button>
                  <a 
                    href={BUSINESS_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-lg text-center flex items-center justify-center gap-2"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;