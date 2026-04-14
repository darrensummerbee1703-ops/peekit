import React from 'react';
import { motion } from 'framer-motion';
import { Play, Share2, Heart, ShoppingBag, TrendingUp, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/lib/constants';
import { Product } from '@/types';
import { Badge } from '@/components/ui/badge';

interface DiscoverProps {
  onProductClick: (product: Product) => void;
}

const Discover: React.FC<DiscoverProps> = ({ onProductClick }) => {
  // TikTok style vertical feed mock - Refined as "For You" feed
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide pb-20 bg-slate-900">
      {MOCK_PRODUCTS.map((product, index) => (
        <div 
          key={product.id}
          className="h-full w-full snap-start relative overflow-hidden"
        >
          {/* Main Content (Image/Video Mock) */}
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover opacity-60"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />

          {/* Top Bar - Personalized Tabs */}
          <div className="absolute top-12 left-0 right-0 px-6 flex justify-center gap-6 z-10">
            <button className="text-white font-black text-lg border-b-2 border-primary pb-1">For You</button>
            <button className="text-white/40 font-bold text-lg pb-1">Following</button>
          </div>

          {/* Right Action Bar */}
          <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center z-10">
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden bg-slate-200 shadow-lg shadow-primary/20">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index + 10}`} alt="avatar" />
              </div>
              <div className="bg-primary text-white rounded-full p-0.5 -mt-3 z-10">
                <Sparkles size={10} className="fill-white" />
              </div>
            </div>
            
            <button className="flex flex-col items-center gap-1 group">
              <div className="p-3 bg-white/10 backdrop-blur-xl rounded-full text-white group-active:scale-125 transition-transform">
                <Heart size={26} className="fill-transparent group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
              </div>
              <span className="text-white text-[10px] font-bold">12.5k</span>
            </button>
            
            <button className="flex flex-col items-center gap-1">
              <div className="p-3 bg-white/10 backdrop-blur-xl rounded-full text-white">
                <Share2 size={26} />
              </div>
              <span className="text-white text-[10px] font-bold">3.2k</span>
            </button>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => onProductClick(product)}
              className="flex flex-col items-center gap-1"
            >
              <div className="p-4 bg-primary rounded-2xl text-white shadow-xl shadow-primary/40 ring-4 ring-primary/20">
                <ShoppingBag size={28} />
              </div>
              <span className="text-primary text-[10px] font-black mt-1 uppercase tracking-tighter bg-white px-2 py-0.5 rounded-full">Compare</span>
            </motion.button>
          </div>

          {/* Bottom Info - Trust & Data Quality */}
          <div className="absolute bottom-28 left-6 right-24 text-white z-10">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-orange-500/90 backdrop-blur-md text-white border-none py-1 px-3 gap-1">
                <TrendingUp size={12} />
                <span className="text-[10px] font-black uppercase tracking-wider">Top in SA</span>
              </Badge>
              {product.retailers[0].verified && (
                <Badge className="bg-blue-500/90 backdrop-blur-md text-white border-none py-1 px-3 gap-1">
                  <ShieldCheck size={12} />
                  <span className="text-[10px] font-black uppercase tracking-wider">Verified</span>
                </Badge>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-white/80 flex items-center gap-1">
              @{product.brand.toLowerCase()}
              <CheckCircle2 size={14} className="text-blue-400 fill-blue-400" />
            </h3>
            <p className="text-2xl font-black leading-tight mt-1 mb-2">
              {product.name}
            </p>
            <p className="text-sm text-white/70 line-clamp-2 font-medium">
              {product.description}
            </p>
            
            <div className="mt-5 flex items-center gap-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-2xl flex flex-col">
                <span className="text-[10px] font-bold text-white/50 uppercase">From</span>
                <span className="text-2xl font-black text-white">R{Math.min(...product.retailers.map(r => r.price)).toLocaleString()}</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-tighter">Live Price Validation</span>
                </div>
                <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
                  Verified by Peek Matching AI
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discover;