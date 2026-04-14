export interface Retailer {
  id: string;
  name: string;
  logo: string;
  price: number;
  oldPrice?: number;
  url: string;
  inStock: boolean;
  deliveryDays?: number; // Days to deliver
  isFastest?: boolean; // Decision guide
  isCheapest?: boolean; // Decision guide
  verified?: boolean; // Trust layer
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  barcode?: string;
  rating: number;
  reviewsCount: number;
  retailers: Retailer[];
  priceHistory: { date: string; price: number }[];
  isTrending?: boolean;
  isDeal?: boolean;
  condition?: 'New' | 'Used' | 'Refurbished'; // Advanced filter
  bestValueId?: string; // ID of the best value retailer
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  wishlist: string[];
  history: string[];
  points: number;
}

export interface SmartNotification {
  id: string;
  title: string;
  message: string;
  type: 'price_drop' | 'restock' | 'deal' | 'system';
  timestamp: string;
  isRead: boolean;
  productId?: string;
}