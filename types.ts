
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'main' | 'side' | 'combo';
}

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  foodChoice: string;
  quantity: number;
  message?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
