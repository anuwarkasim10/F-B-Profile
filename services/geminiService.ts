import { MENU_ITEMS } from '../constants.ts';

/**
 * Static fallback for recommendations since AI services have been removed.
 */
export const getAIRecommendation = async (mood: string, hungerLevel: string): Promise<string> => {
  console.info("AI Service disabled. Providing static recommendation.");
  
  const bestSellers = MENU_ITEMS.filter(i => i.category === 'main');
  const randomPick = bestSellers[Math.floor(Math.random() * bestSellers.length)];
  
  return `Based on your ${mood} mood, we suggest the ${randomPick.name}! It's one of our favorites.`;
};