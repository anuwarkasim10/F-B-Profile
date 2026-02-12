import React, { useState } from 'react';
import { LeadFormData, OrderRow } from '../types.ts';
import { MENU_ITEMS, BUSINESS_INFO } from '../constants.ts';

// Webhook URL provided for data logging
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzqZez559VIifmiMQcoDLpSx2EAPoX8lKikER5QWrU/dev';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    items: [{ foodName: MENU_ITEMS[0].name, quantity: 1 }],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getFormattedItems = () => {
    return formData.items
      .map(item => `${item.foodName} ${item.quantity}`)
      .join(', ');
  };

  const getWhatsAppLink = () => {
    const itemsString = getFormattedItems();
    const remark = formData.message || '-';
    
    // Exact format requested:
    // NEW INQUIRY
    // Name: {name}
    // Phone: {phone}
    // Your Items: {selected items (comma-separated)} {quantity}
    // Special Requirements / Message : {remark}
    
    const text = `NEW INQUIRY%0A` +
                 `Name: ${encodeURIComponent(formData.name)}%0A` + 
                 `Phone: ${encodeURIComponent(formData.phone)}%0A` +
                 `Your Items: ${encodeURIComponent(itemsString)}%0A` +
                 `Special Requirements / Message : ${encodeURIComponent(remark)}`;
                 
    return `https://wa.me/60142562616?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      timestamp: new Date().toLocaleString(),
      name: formData.name,
      phone: formData.phone,
      orders: getFormattedItems(),
      message: formData.message || 'No message'
    };

    try {
      // Log to Google Sheets
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      });

      setIsSubmitting(false);
      setSubmitted(true);
      
      // Optionally trigger WhatsApp automatically on success, 
      // but usually better to let user click the button to avoid pop-up blocks
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong sending your enquiry. Please try using WhatsApp directly.');
      setIsSubmitting(false);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index: number, field: keyof OrderRow, value: string | number) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { foodName: MENU_ITEMS[0].name, quantity: 1 }]
    }));
  };

  const removeItem = (index: number) => {
    if (formData.items.length <= 1) return;
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  return (
    <section id="order" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Quick Order</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display text-secondary leading-tight">Start Your Delicious Journey</h3>
            <p className="text-gray-500 text-lg">
              Fill in the form below. Once you click "Submit", you can also send the order directly to our WhatsApp for faster processing!
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-primary text-xl">📞</div>
                <div>
                  <p className="text-sm text-gray-400 font-bold">WhatsApp & Call</p>
                  <p className="text-xl font-bold text-secondary">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-primary text-xl">📍</div>
                <div>
                  <p className="text-sm text-gray-400 font-bold">Pick-up Location</p>
                  <p className="text-base font-bold text-secondary leading-tight max-w-xs">{BUSINESS_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 md:p-12 rounded-[2rem] shadow-xl border border-primary/10 relative overflow-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12 animate-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl">✅</div>
                <h4 className="text-3xl font-bold text-secondary">Enquiry Saved!</h4>
                <p className="text-gray-600">Your enquiry has been logged. To get a faster reply, please click the button below to send it to our WhatsApp.</p>
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  Send to WhatsApp Now
                </a>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-bold text-sm hover:underline"
                >
                  Edit or send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold animate-in">
                    {error}
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary">Name (required)</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleTextChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/70 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary">Phone (required)</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleTextChange}
                      placeholder="e.g. 0123456789"
                      className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/70 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-secondary block">Your Items (required)</label>
                  {formData.items.map((item, index) => (
                    <div key={index} className="flex gap-3 items-end animate-in">
                      <div className="flex-[3] space-y-1">
                        <select 
                          required
                          value={item.foodName}
                          onChange={(e) => handleItemChange(index, 'foodName', e.target.value)}
                          className="w-full px-3 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/70 transition-all outline-none appearance-none"
                        >
                          {MENU_ITEMS.map(m => (
                            <option key={m.id} value={m.name}>{m.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex-1 space-y-1">
                        <input 
                          required
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 1)}
                          className="w-full px-3 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/70 transition-all outline-none"
                        />
                      </div>
                      {formData.items.length > 1 && (
                        <button 
                          type="button"
                          onClick={() => removeItem(index)}
                          className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-bold"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button 
                    type="button"
                    onClick={addItem}
                    className="text-primary font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-all"
                  >
                    + Add Another Item
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary">Special Requirements / Message</label>
                  <textarea 
                    rows={2}
                    name="message"
                    value={formData.message}
                    onChange={handleTextChange}
                    placeholder="Any special notes or extra items..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white bg-white/70 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-4 pt-4">
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all shadow-lg shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving Enquiry...
                      </>
                    ) : 'Submit Enquiry'}
                  </button>
                  <div className="relative flex items-center justify-center">
                    <span className="absolute bg-cream px-4 text-xs font-bold text-gray-400 uppercase">Or Order Direct</span>
                    <hr className="w-full border-gray-200" />
                  </div>
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-lg text-center flex items-center justify-center gap-2"
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