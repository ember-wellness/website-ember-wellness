import burnicolImg from '@/assets/burnicol-product.png';
import { Product } from '@/store/cartStore';

export const products: Product[] = [
  {
    id: '1',
    name: 'Burnicol Ointment',
    price: 180,
    image: burnicolImg,
    category: 'Ointments',
    description: 'Natural Ayurvedic burn healing ointment. Zero side effects, effective for all types of burn wounds. 200gm antiseptic formula.',
    sizes: ['50gm', '100gm', '200gm'],
    colors: [],
    isBestSeller: true,
  },
  // {
  //   id: '2',
  //   name: 'Burnicol Ointment - Family Pack',
  //   price: 450,
  //   originalPrice: 540,
  //   image: burnicolImg,
  //   category: 'Ointments',
  //   description: 'Value pack of 3 Burnicol ointments (200gm each). Perfect for households and first-aid kits.',
  //   sizes: ['3 x 200gm'],
  //   colors: [],
  //   isNew: true,
  // },
  {
    id: '2', //changed id from 3 to 2
    name: 'Burnicol First Aid Kit',
    price: 599,
    image: burnicolImg,
    category: 'First Aid',
    description: 'Complete burn first aid kit including Burnicol ointment, sterile bandages, and cooling gel pads.',
    sizes: ['Standard Kit'],
    colors: [],
    isNew: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'ointments', name: 'Ointments', count: products.filter(p => p.category === 'Ointments').length },
  { id: 'first aid', name: 'First Aid', count: products.filter(p => p.category === 'First Aid').length },
];
