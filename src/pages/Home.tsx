import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Camera, Scan, Bell, Sparkles, Filter, SlidersHorizontal, ArrowRight, X } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/lib/constants';
import ProductCard from '@/components/features/ProductCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Product } from '@/types';
import FilterDrawer from '@/components/features/FilterDrawer';
import NotificationCenter from '@/components/features/NotificationCenter';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onScanClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick, onScanClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  
  // Simulated Loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const trendingProducts = MOCK_PRODUCTS.filter(p => p.isTrending);
  const bestDeals = MOCK_PRODUCTS.filter(p => p.isDeal);

  // Search Suggestions
  const suggestions = searchQuery.length > 1 
    ? MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 4)
    : [];

  return (
    <div className="pb-24 pt-6 px-4 flex flex-col gap-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Peek <span className="text-primary">iT</span></h1>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Live South Africa
          </p>
        </div>
        <button 
          onClick={() => setIsNotifOpen(true)}
          className="relative p-2.5 bg-white shadow-sm border border-slate-100 rounded-2xl text-slate-600 hover:text-primary transition-colors"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      </div>

      {/* Search Bar & Suggestions */}
      <div className="relative z-30">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
            <Search size={20} />
          </div>
          <Input
            placeholder="Search phones, tech, fashion..."
            className="pl-12 pr-24 py-7 bg-white shadow-sm border-slate-100 rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/10 text-base"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearching(e.target.value.length > 0);
            }}
            onFocus={() => searchQuery.length > 0 && setIsSearching(true)}
          />
          <div className="absolute inset-y-0 right-2 flex items-center gap-1">
            <button 
              onClick={onScanClick}
              className="p-2 text-slate-400 hover:text-primary transition-colors"
            >
              <Scan size={20} />
            </button>
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="p-2.5 bg-slate-900 text-white rounded-xl shadow-lg shadow-slate-200"
            >
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Instant Search Suggestions */}
        <AnimatePresence>
          {isSearching && searchQuery.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <div className="p-2">
                {suggestions.length > 0 ? (
                  suggestions.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onProductClick(p);
                        setIsSearching(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-900 truncate">{p.name}</div>
                        <div className="text-[10px] text-slate-400">R{Math.min(...p.retailers.map(r => r.price)).toLocaleString()}</div>
                      </div>
                      <ArrowRight size={14} className="text-slate-300" />
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-slate-500 text-sm">No products found</div>
                )}
                <div className="border-t border-slate-50 mt-1 p-2">
                   <button 
                    onClick={() => setIsSearching(false)}
                    className="w-full py-2 text-xs font-bold text-primary text-center"
                   >
                     Clear Results
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hero / AI Assistant Upgrade */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-primary via-primary to-slate-900 rounded-[32px] p-6 text-white relative overflow-hidden shadow-xl shadow-primary/20"
      >
        <div className="flex flex-col gap-1 relative z-10">
          <div className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest mb-1">
            <Sparkles size={14} className="text-yellow-400" />
            AI Smart Shopper
          </div>
          <h2 className="text-2xl font-black leading-tight">
            Find the best laptop <br/> under R15,000
          </h2>
          <p className="text-white/70 text-sm mt-2 max-w-[200px]">
            Our AI compares 20+ SA stores instantly.
          </p>
          <button className="mt-4 bg-white text-primary text-sm font-black py-3 px-6 rounded-2xl self-start flex items-center gap-2 hover:bg-slate-100 transition-colors">
            Ask Peek AI
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 right-4 w-32 opacity-20 rotate-12">
          <Sparkles size={160} />
        </div>
      </motion.div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {['All', 'Electronics', 'Fashion', 'Audio', 'Home', 'Beauty'].map((cat, i) => (
          <Badge 
            key={cat} 
            variant="secondary" 
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap border-none transition-all ${
              i === 0 ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 shadow-sm'
            }`}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Featured / Trending Section with Skeletons */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">Trending Now</h2>
          <button className="text-primary text-sm font-bold flex items-center gap-1">
            Explore
            <ArrowRight size={14} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {isLoading ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="aspect-square w-full rounded-2xl" />
                <Skeleton className="h-4 w-3/4 rounded-full" />
                <Skeleton className="h-4 w-1/2 rounded-full" />
              </div>
            ))
          ) : (
            trendingProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => onProductClick(product)}
              />
            ))
          )}
        </div>
      </section>

      {/* Best Deals / Conversion Optimization */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-black text-slate-900">Flash Deals</h2>
            <div className="text-[10px] text-red-500 font-bold uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
              Ends in 02:45:12
            </div>
          </div>
          <button className="text-slate-400 text-sm font-bold">View all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {isLoading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="min-w-[240px] flex flex-col gap-2">
                <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                <Skeleton className="h-4 w-3/4 rounded-full" />
              </div>
            ))
          ) : (
            bestDeals.map((product) => (
              <div key={product.id} className="min-w-[260px]">
                <ProductCard 
                  product={product} 
                  onClick={() => onProductClick(product)}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Overlays */}
      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      <NotificationCenter isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} onProductClick={onProductClick} />
    </div>
  );
};

export default Home;