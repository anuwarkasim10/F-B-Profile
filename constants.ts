import { FoodItem, Feature } from './types.ts';

export const MENU_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: 'Crispy Chicken Tenders',
    description: 'Golden, hand-breaded chicken strips served with our signature honey mustard dip.',
    price: 'RM 12.90',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop',
    category: 'main'
  },
  {
    id: '2',
    name: 'Spicy Zinger Wrap',
    description: 'Juicy chicken breast with fresh lettuce, tomatoes, and spicy mayo in a toasted tortilla.',
    price: 'RM 9.50',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    category: 'main'
  },
  {
    id: '3',
    name: 'The Ultimate BBQ Burger',
    description: '100% Wagyu beef patty, smoked bacon, caramelized onions, and house BBQ sauce.',
    price: 'RM 15.00',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    category: 'main'
  },
  {
    id: '4',
    name: 'Truffle Parmesan Fries',
    description: 'Classic skin-on fries tossed in white truffle oil and aged parmesan cheese.',
    price: 'RM 6.50',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
    category: 'side'
  },
  {
    id: '5',
    name: 'Family Feast Combo',
    description: '10pc Chicken Tenders, 2 Burgers, 2 Large Fries, and a 1.5L drink.',
    price: 'RM 45.00',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    category: 'combo'
  },
  {
    id: '6',
    name: 'Spicy Loaded Nachos',
    description: 'Crispy tortilla chips topped with melted cheese, jalapeños, and pulled chicken.',
    price: 'RM 11.00',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop',
    category: 'side'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Fresh Ingredients',
    description: 'We source only the highest quality produce and meats daily.',
    icon: 'leaf'
  },
  {
    title: 'Fast Service',
    description: 'Your cravings shouldn\'t wait. We pride ourselves on speed.',
    icon: 'clock'
  },
  {
    title: 'Affordable Prices',
    description: 'Premium taste that won\'t break your bank account.',
    icon: 'tag'
  },
  {
    title: 'Event Catering',
    description: 'Perfect for birthdays, office parties, and special gatherings.',
    icon: 'party-popper'
  }
];

export const BUSINESS_INFO = {
  name: 'FlavorPro Kitchen',
  phone: '0142562616',
  whatsapp: 'https://wa.me/60142562616',
  email: 'hello@flavorpro.com',
  address: '9-7, Block A, Jaya One 72A Jalan Prof Diraja, Jln Profesor Diraja Ungku Aziz, 46200 Petaling Jaya, Selangor',
  instagram: 'https://instagram.com/flavorpro',
  facebook: 'https://facebook.com/flavorpro'
};