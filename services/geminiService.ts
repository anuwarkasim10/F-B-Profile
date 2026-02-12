import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from '../constants.ts';

export const getAIRecommendation = async (mood: string, hungerLevel: string): Promise<string> => {
  // Guidelines: API key MUST be obtained exclusively from process.env.API_KEY
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Using fallback recommendation.");
    return "I recommend our Signature BBQ Burger - it's perfect for satisfying any hunger!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const menuSummary = MENU_ITEMS.map(item => `${item.name}: ${item.description}`).join('\n');

    const prompt = `
      User Mood: ${mood}
      User Hunger Level: ${hungerLevel}
      
      Our Menu:
      ${menuSummary}
      
      Act as a friendly, enthusiastic food connoisseur. Suggest ONE specific dish from our menu that best matches the user's mood and hunger. Explain why it's a great choice in a single appetizing sentence. Keep it short and high energy.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    // Extract text directly from property as per @google/genai guidelines
    return response.text || "Everything on our menu is delicious! How about a Burger?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I recommend our Best-selling Chicken Tenders - you can't go wrong!";
  }
};