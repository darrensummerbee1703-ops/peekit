import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, TrendingUp, Zap, Award, CheckCircle2 } from 'lucide-react';
import { Product } from '@/types';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const lowestPrice = Math.min(...product.retailers.map(r => r.price));
  const hasOldPrice = product.retailers.some(r => r.oldPrice);
  const maxDiscount = hasOldPrice 
    ? Math.max(...product.retailers.map(r => r.oldPrice ? ((r.oldPrice - r.price) / r.oldPrice) * 100 : 0))
    : 0;

  // Conversion Optimization Logic
  const bestRetailer = product.retailers.find(r => r.id === product.bestValueId) || product.retailers[0];

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full cursor-pointer group"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <motion.img
          layoutId={`product-image-${product.id}`}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <button 
            onClick={(e) => { e.stopPropagation(); }}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-sm"
          >
            <Heart size={16} />
          </button>
        </div>
        
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isTrending && (
            <Badge className="bg-orange-500 text-white border-none gap-1 py-0.5 px-2 text-[10px]">
              <TrendingUp size={10} />
              Trending
            </Badge>
          )}
          {product.isDeal && (
            <Badge className="bg-red-500 text-white border-none gap-1 py-0.5 px-2 text-[10px]">
              <Zap size={10} />
              Hot Deal
            </Badge>
          )}
        </div>
        
        {maxDiscount > 0 && (
          <div className="absolute bottom-2 left-2">
            <Badge className="bg-green-600 text-white border-none py-0.5 px-2 text-[10px] font-bold">
              SAVE {Math.round(maxDiscount)}%
            </Badge>
          </div>
        )}

        {/* Trust Layer: Verified Badge */}
        {bestRetailer.verified && (
          <div className="absolute bottom-2 right-2">
            <div className="p-1 bg-white/90 backdrop-blur-sm rounded-full text-primary shadow-sm">
              <CheckCircle2 size={14} />
            </div>
          </div>
        )}
      </div>

      <div className="p-3 flex flex-col flex-1 gap-1">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{product.brand}</div>
          <div className="flex items-center gap-0.5 text-[10px] font-bold text-slate-500">
            <Star size={10} className="fill-yellow-400 text-yellow-400" />
            {product.rating}
          </div>
        </div>
        <h3 className="text-sm font-semibold line-clamp-2 text-slate-800 leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-2 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="text-lg font-extrabold text-primary">
              R{lowestPrice.toLocaleString()}
            </div>
            {hasOldPrice && (
              <div className="text-[10px] text-slate-400 line-through">
                R{bestRetailer.oldPrice?.toLocaleString()}
              </div>
            )}
          </div>
          
          {/* Conversion Tags */}
          <div className="flex gap-1">
            {bestRetailer.isCheapest && (
              <span className="text-[9px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-100 uppercase tracking-tighter">
                Cheapest
              </span>
            )}
            {bestRetailer.deliveryDays && bestRetailer.deliveryDays <= 1 && (
              <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 uppercase tracking-tighter">
                Next Day
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;