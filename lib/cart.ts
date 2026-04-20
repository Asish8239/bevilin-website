import { Product, CartItem } from "@/types";

const CART_KEY = "bevilin_cart";

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: CartItem[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
};

export const addToCart = (product: Product, quantity: number = 1): void => {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart(cart);
};

export const updateCartItem = (id: string, quantity: number): void => {
  const cart = getCart();
  const item = cart.find((item) => item.id === id);

  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
};

export const removeFromCart = (id: string): void => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== id);
  saveCart(updatedCart);
};

export const clearCart = (): void => {
  saveCart([]);
};

export const getCartCount = (): number => {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
