import { useState, useEffect } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

let cartItems: CartItem[] = [];
let listeners: (() => void)[] = [];

const notify = () => listeners.forEach(fn => fn());

export const cartStore = {
  getItems: () => cartItems,
  subscribe: (fn: () => void) => {
    listeners.push(fn);
    return () => { listeners = listeners.filter(l => l !== fn); };
  },
  addItem: (product: Product) => {
    const existing = cartItems.find(i => i.product.id === product.id);
    if (existing) {
      cartItems = cartItems.map(i =>
        i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      cartItems = [...cartItems, { product, quantity: 1 }];
    }
    notify();
  },
  removeItem: (productId: number) => {
    cartItems = cartItems.filter(i => i.product.id !== productId);
    notify();
  },
  updateQuantity: (productId: number, quantity: number) => {
    if (quantity <= 0) {
      cartStore.removeItem(productId);
      return;
    }
    cartItems = cartItems.map(i =>
      i.product.id === productId ? { ...i, quantity } : i
    );
    notify();
  },
  clear: () => {
    cartItems = [];
    notify();
  },
  getTotalItems: () => cartItems.reduce((sum, i) => sum + i.quantity, 0),
  getTotalPrice: () => cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
};

export function useCart() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const unsub = cartStore.subscribe(() => forceUpdate(n => n + 1));
    return unsub;
  }, []);

  return {
    items: cartStore.getItems(),
    totalItems: cartStore.getTotalItems(),
    totalPrice: cartStore.getTotalPrice(),
    addItem: cartStore.addItem,
    removeItem: cartStore.removeItem,
    updateQuantity: cartStore.updateQuantity,
    clear: cartStore.clear,
  };
}