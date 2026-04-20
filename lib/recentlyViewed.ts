import { Product } from "@/types";

const RECENT_KEY = "recentlyViewed";
const MAX_RECENT = 10;

export const addToRecentlyViewed = (product: Product): void => {
  if (typeof window === "undefined") return;

  let recent: Product[] = [];
  const stored = localStorage.getItem(RECENT_KEY);
  
  if (stored) {
    recent = JSON.parse(stored);
  }

  // Remove if already exists
  recent = recent.filter((p) => p.id !== product.id);

  // Add to beginning
  recent.unshift(product);

  // Keep only MAX_RECENT items
  recent = recent.slice(0, MAX_RECENT);

  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
};

export const getRecentlyViewed = (): Product[] => {
  if (typeof window === "undefined") return [];
  
  const stored = localStorage.getItem(RECENT_KEY);
  return stored ? JSON.parse(stored) : [];
};
