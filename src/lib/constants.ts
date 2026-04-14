import { Product } from '@/types';

export const AFFILIATE_CODE = 'peekit-sa-20';

export const RETAILERS = {
  TAKEALOT: { name: 'Takealot', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Takealot.com_Logo.png' },
  AMAZON_SA: { name: 'Amazon SA', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  LOOT: { name: 'Loot', logo: 'https://www.loot.co.za/images/loot-logo.png' },
  ZANDO: { name: 'Zando', logo: 'https://www.zando.co.za/images/zando-logo.png' },
  SUPERBALIST: { name: 'Superbalist', logo: 'https://superbalist.com/favicon.ico' },
  INCREDIBLE: { name: 'Incredible Connection', logo: 'https://www.incredible.co.za/static/version1706692224/frontend/Incredible/default/en_ZA/images/logo.svg' },
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max (256GB, Titanium)',
    description: 'The latest iPhone with a titanium design, A17 Pro chip, and the best camera system on iPhone. Super Retina XDR display with ProMotion.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3b52e5ff-a3dd-4e03-bd35-cda9e87418c2/iphone-15-pro-max-93d5245a-1776158481231.webp',
    category: 'Electronics',
    brand: 'Apple',
    barcode: '194253702153',
    rating: 4.8,
    reviewsCount: 1240,
    isTrending: true,
    condition: 'New',
    priceHistory: [
      { date: '2024-01-01', price: 29999 },
      { date: '2024-02-01', price: 28499 },
      { date: '2024-03-01', price: 27999 },
      { date: '2024-04-01', price: 27999 },
      { date: '2024-05-01', price: 26999 },
    ],
    retailers: [
      { id: 'amz-sa', name: 'Amazon SA', logo: RETAILERS.AMAZON_SA.logo, price: 25999, oldPrice: 28999, url: 'https://amazon.co.za/iphone15', inStock: true, deliveryDays: 2, isCheapest: true, verified: true },
      { id: 'tka', name: 'Takealot', logo: RETAILERS.TAKEALOT.logo, price: 26499, url: 'https://takealot.com/iphone15', inStock: true, deliveryDays: 1, isFastest: true, verified: true },
      { id: 'ic', name: 'Incredible', logo: RETAILERS.INCREDIBLE.logo, price: 27999, url: 'https://incredible.co.za/iphone15', inStock: true, deliveryDays: 3, verified: true },
    ],
    bestValueId: 'tka'
  },
  {
    id: '2',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality and 30-hour battery life. Optimized for Alexa and Google Assistant.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3b52e5ff-a3dd-4e03-bd35-cda9e87418c2/sony-wh-1000xm5-43573169-1776158481686.webp',
    category: 'Audio',
    brand: 'Sony',
    rating: 4.9,
    reviewsCount: 850,
    isTrending: true,
    isDeal: true,
    condition: 'New',
    priceHistory: [
      { date: '2024-01-01', price: 8999 },
      { date: '2024-02-01', price: 8499 },
      { date: '2024-03-01', price: 8999 },
      { date: '2024-04-01', price: 7999 },
      { date: '2024-05-01', price: 6999 },
    ],
    retailers: [
      { id: 'tka', name: 'Takealot', logo: RETAILERS.TAKEALOT.logo, price: 6499, oldPrice: 8999, url: 'https://takealot.com/sony-headphones', inStock: true, deliveryDays: 1, isCheapest: true, isFastest: true, verified: true },
      { id: 'lt', name: 'Loot', logo: RETAILERS.LOOT.logo, price: 6899, url: 'https://loot.co.za/sony-headphones', inStock: true, deliveryDays: 4, verified: true },
    ],
    bestValueId: 'tka'
  },
  {
    id: '3',
    name: 'Nike Air Max 270 (Men)',
    description: 'Nike Air Max 270 delivers visible cushioning under every step. Features a large Max Air unit and comfortable knit upper.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3b52e5ff-a3dd-4e03-bd35-cda9e87418c2/nike-air-max-270-3ea71224-1776158481009.webp',
    category: 'Fashion',
    brand: 'Nike',
    rating: 4.5,
    reviewsCount: 2300,
    isDeal: true,
    condition: 'New',
    priceHistory: [
      { date: '2024-01-01', price: 3200 },
      { date: '2024-02-01', price: 3000 },
      { date: '2024-03-01', price: 3200 },
      { date: '2024-04-01', price: 2800 },
      { date: '2024-05-01', price: 2400 },
    ],
    retailers: [
      { id: 'zd', name: 'Zando', logo: RETAILERS.ZANDO.logo, price: 2399, oldPrice: 3200, url: 'https://zando.co.za/nike-air-max', inStock: true, deliveryDays: 3, isCheapest: true, verified: true },
      { id: 'sb', name: 'Superbalist', logo: RETAILERS.SUPERBALIST.logo, price: 2599, url: 'https://superbalist.com/nike-air-max', inStock: true, deliveryDays: 2, isFastest: true, verified: true },
    ],
    bestValueId: 'zd'
  },
  {
    id: '4',
    name: 'Samsung Galaxy Watch 6 (44mm)',
    description: 'Your guide to a healthier lifestyle. Advanced sleep coaching, heart monitoring, and elegant design with sapphire crystal glass.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3b52e5ff-a3dd-4e03-bd35-cda9e87418c2/samsung-galaxy-watch-6-32a42234-1776158482471.webp',
    category: 'Electronics',
    brand: 'Samsung',
    rating: 4.7,
    reviewsCount: 450,
    condition: 'New',
    priceHistory: [
      { date: '2024-01-01', price: 5999 },
      { date: '2024-02-01', price: 5499 },
      { date: '2024-03-01', price: 4999 },
      { date: '2024-04-01', price: 4999 },
      { date: '2024-05-01', price: 4499 },
    ],
    retailers: [
      { id: 'tka', name: 'Takealot', logo: RETAILERS.TAKEALOT.logo, price: 4299, oldPrice: 5999, url: 'https://takealot.com/galaxy-watch', inStock: true, deliveryDays: 1, isCheapest: true, isFastest: true, verified: true },
      { id: 'amz-sa', name: 'Amazon SA', logo: RETAILERS.AMAZON_SA.logo, price: 4499, url: 'https://amazon.co.za/galaxy-watch', inStock: true, deliveryDays: 2, verified: true },
    ],
    bestValueId: 'tka'
  },
  {
    id: '5',
    name: 'Fujifilm X-T5 Mirrorless Camera',
    description: 'High-performance mirrorless digital camera featuring 40.2MP sensor and 6.2K video recording. Perfect for enthusiasts and pros.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3b52e5ff-a3dd-4e03-bd35-cda9e87418c2/fujifilm-x-t5-0ad45e6c-1776158482237.webp',
    category: 'Electronics',
    brand: 'Fujifilm',
    rating: 4.9,
    reviewsCount: 120,
    condition: 'New',
    priceHistory: [
      { date: '2024-01-01', price: 34999 },
      { date: '2024-02-01', price: 34999 },
      { date: '2024-03-01', price: 34999 },
      { date: '2024-04-01', price: 32999 },
      { date: '2024-05-01', price: 32999 },
    ],
    retailers: [
      { id: 'amz-sa', name: 'Amazon SA', logo: RETAILERS.AMAZON_SA.logo, price: 31999, oldPrice: 34999, url: 'https://amazon.co.za/fujifilm-xt5', inStock: true, deliveryDays: 2, isCheapest: true, verified: true },
      { id: 'ic', name: 'Incredible', logo: RETAILERS.INCREDIBLE.logo, price: 33999, url: 'https://incredible.co.za/fujifilm-xt5', inStock: true, deliveryDays: 3, isFastest: true, verified: true },
    ],
    bestValueId: 'amz-sa'
  },
  {
    id: '6',
    name: 'Hisense 65" 4K Smart TV',
    description: 'Breathtaking 4K ULED TV with Dolby Vision, HDR10+, and Vidaa Smart OS. Stunning clarity and vibrant colors for your home theater.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3b52e5ff-a3dd-4e03-bd35-cda9e87418c2/65-inch-4k-smart-tv-9abc37a5-1776158482613.webp',
    category: 'Electronics',
    brand: 'Hisense',
    rating: 4.6,
    reviewsCount: 320,
    condition: 'New',
    isTrending: true,
    priceHistory: [
      { date: '2024-01-01', price: 14999 },
      { date: '2024-02-01', price: 14999 },
      { date: '2024-03-01', price: 13999 },
      { date: '2024-04-01', price: 12999 },
      { date: '2024-05-01', price: 11999 },
    ],
    retailers: [
      { id: 'tka', name: 'Takealot', logo: RETAILERS.TAKEALOT.logo, price: 10999, oldPrice: 14999, url: 'https://takealot.com/hisense-tv', inStock: true, deliveryDays: 2, isCheapest: true, isFastest: true, verified: true },
      { id: 'ic', name: 'Incredible', logo: RETAILERS.INCREDIBLE.logo, price: 11999, url: 'https://incredible.co.za/hisense-tv', inStock: true, deliveryDays: 5, verified: true },
    ],
    bestValueId: 'tka'
  }
];

export const MOCK_NOTIFICATIONS = [
  { id: '1', title: 'Price Drop Alert \ud83d\udd25', message: 'Sony WH-1000XM5 just dropped by 15% on Takealot!', type: 'price_drop', timestamp: '10m ago', isRead: false, productId: '2' },
  { id: '2', title: 'Restock Alert \u2705', message: 'iPhone 15 Pro Max is back in stock at Amazon SA.', type: 'restock', timestamp: '2h ago', isRead: false, productId: '1' },
  { id: '3', title: 'Daily Deal \ud83c\udf81', message: 'Exclusive R500 voucher for your next purchase on Peek iT.', type: 'deal', timestamp: '5h ago', isRead: true },
];