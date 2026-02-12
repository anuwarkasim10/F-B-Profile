
import React, { useState } from 'react';
import { getAIRecommendation } from '../services/geminiService';

const FlavorAssistant: React.FC = () => {
  const [mood, setMood] = useState('');
  const [hunger, setHunger] = useState('medium');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSuggest = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    const result = await getAIRecommendation(mood, hunger);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border border-primary/10 max-w-md mx-auto my-12">
      <h3 className="text-2xl font-bold mb-4 text-center text-primary flex items-center justify-center gap-2">
        <span>🤖</span> AI Flavor Assistant
      </h3>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Can't decide? Tell us how you're feeling!
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Describe your mood (e.g., Happy, Tired, Adventurous):</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="I'm feeling..."
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Hunger Level:</label>
          <div className="flex gap-2">
            {['snack', 'medium', 'starving'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setHunger(lvl)}
                className={`flex-1 py-2 rounded-xl text-sm capitalize transition-all ${
                  hunger === lvl 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSuggest}
          disabled={loading || !mood}
          className="w-full bg-secondary text-white py-3 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-50"
        >
          {loading ? 'Consulting the Chef...' : 'Get Recommendation'}
        </button>

        {recommendation && (
          <div className="mt-6 p-4 bg-primary/5 rounded-2xl border border-primary/20 animate-in fade-in slide-in-from-bottom-2">
            <p className="text-primary font-bold mb-1 italic">Our Suggestion:</p>
            <p className="text-gray-800 leading-relaxed">{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlavorAssistant;
