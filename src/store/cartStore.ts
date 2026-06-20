import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size?: string, color?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, size, color) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id && item.selectedSize === size && item.selectedColor === color
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      
      return {
        items: [...state.items, { ...product, quantity: 1, selectedSize: size, selectedColor: color }],
      };
    });
  },
  
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }));
  },
  
  clearCart: () => set({ items: [] }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
