export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'main' | 'side' | 'combo';
}

export interface OrderRow {
  foodName: string;
  quantity: number;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  items: OrderRow[];
  message?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}