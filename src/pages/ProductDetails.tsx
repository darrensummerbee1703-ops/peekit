import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Share2, Heart, ShieldCheck, MapPin, Bell, Star, Sparkles, CheckCircle2, Clock, Truck, ShieldAlert, Check } from 'lucide-react';
import { Product } from '@/types';
import { AFFILIATE_CODE } from '@/lib/constants';
import PriceChart from '@/components/features/PriceChart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const sortedRetailers = [...product.retailers].sort((a, b) => a.price - b.price);
  const bestPrice = sortedRetailers[0];

  const handleBuy = (url: string) => {
    const affiliateUrl = url.includes('?') 
      ? `${url}&ref=${AFFILIATE_CODE}` 
      : `${url}?ref=${AFFILIATE_CODE}`;
    window.open(affiliateUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-slate-50 min-h-screen pb-32"
    >
      {/* Navbar */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md z-40 flex items-center justify-between p-4 border-b border-slate-100">
        <button onClick={onBack} className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors">
            <Share2 size={20} />
          </button>
          <button className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors text-red-500">
            <Heart size={20} className="fill-red-500" />
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white p-8 flex flex-col items-center">
        <motion.img
          layoutId={`product-image-${product.id}`}
          src={product.image}
          alt={product.name}
          className="w-full max-w-[320px] h-auto object-contain rounded-2xl shadow-2xl shadow-slate-100"
        />
      </div>

      {/* Info Section */}
      <div className="p-6 bg-white rounded-t-[40px] -mt-8 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] flex flex-col gap-6 relative z-10">
        <div className="flex justify-center -mt-8 mb-4">
           <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-slate-400 font-black border-slate-100 bg-slate-50 px-3 py-1 text-[10px] uppercase">
                {product.brand}
              </Badge>
              {product.condition && (
                <Badge className="bg-blue-50 text-blue-600 border-blue-100 text-[10px] font-black uppercase">
                  {product.condition}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1 text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              {product.rating}
              <span className="text-slate-400 font-bold ml-1">({product.reviewsCount})</span>
            </div>
          </div>
          <h1 className="text-2xl font-black text-slate-900 leading-tight">
            {product.name}
          </h1>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed font-medium">
            {product.description}
          </p>
        </div>

        {/* Trust & Local Intelligence */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
             <div className="p-2 bg-green-100 text-green-600 rounded-xl">
               <ShieldCheck size={20} />
             </div>
             <div>
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Verified</div>
               <div className="text-xs font-bold text-slate-900">Peek Trusted</div>
             </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
             <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
               <Truck size={20} />
             </div>
             <div>
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Delivery</div>
               <div className="text-xs font-bold text-slate-900">1-3 Days SA</div>
             </div>
          </div>
        </div>

        {/* Price History */}
        <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <h3 className="font-black text-slate-900 flex items-center gap-2">
                Price History
                <Badge className="text-[9px] font-black text-green-700 border-green-200 bg-green-50 uppercase tracking-tighter px-1.5 py-0">
                  Trending Down
                </Badge>
              </h3>
              <p className="text-[10px] text-slate-400 font-bold">Updated 5 minutes ago</p>
            </div>
            <button className="bg-slate-900 text-white px-3 py-1.5 rounded-xl text-[10px] font-black flex items-center gap-1.5 shadow-lg shadow-slate-200">
              <Bell size={12} />
              SET ALERT
            </button>
          </div>
          <PriceChart data={product.priceHistory} />
        </div>

        {/* Price Comparison - The Core Engine */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-black text-slate-900 uppercase tracking-wider text-sm">Real-Time Comparison</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase">{product.retailers.length} Stores Matched</span>
          </div>
          <div className="flex flex-col gap-3">
            {sortedRetailers.map((retailer, index) => (
              <div
                key={retailer.id}
                className={`p-4 rounded-3xl border transition-all ${
                  index === 0 ? 'bg-primary/5 border-primary shadow-sm ring-1 ring-primary/10' : 'bg-white border-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 p-1.5 flex items-center justify-center overflow-hidden shadow-sm">
                      <img src={retailer.logo} alt={retailer.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                        {retailer.name}
                        {retailer.verified && <CheckCircle2 size={12} className="text-blue-500 fill-blue-500" />}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xl font-black text-slate-900">
                          R{retailer.price.toLocaleString()}
                        </span>
                        {retailer.oldPrice && (
                          <span className="text-[10px] text-slate-400 font-bold line-through">
                            R{retailer.oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {index === 0 && (
                    <Badge className="bg-green-600 text-white border-none text-[9px] font-black uppercase px-2 py-0.5 animate-pulse">
                      Best Price
                    </Badge>
                  )}
                </div>
                
                <Separator className="bg-slate-100 mb-3" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                       <Clock size={12} className="text-slate-400" />
                       <span className="text-[10px] font-bold text-slate-500">{retailer.deliveryDays} Day Delivery</span>
                    </div>
                    {retailer.inStock ? (
                      <div className="flex items-center gap-1 text-green-600">
                        <Check size={12} />
                        <span className="text-[10px] font-black uppercase">In Stock</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-red-500">
                        <ShieldAlert size={12} />
                        <span className="text-[10px] font-black uppercase tracking-tighter">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  
                  <Button
                    onClick={() => handleBuy(retailer.url)}
                    disabled={!retailer.inStock}
                    size="sm"
                    className={`rounded-2xl font-black px-6 h-10 ${
                      index === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-900 text-white'
                    }`}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Comparisons Upgrade */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white flex flex-col gap-4 shadow-xl shadow-indigo-100 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-white/70 font-black text-[10px] uppercase tracking-widest mb-2">
              <Sparkles size={14} className="text-yellow-400" />
              Comparative Intelligence
            </div>
            <h4 className="text-lg font-black leading-tight mb-2">Is there a better choice?</h4>
            <p className="text-xs text-white/80 font-medium leading-relaxed">
              Peek AI found that the <span className="text-yellow-400 font-black">Sony WH-1000XM4</span> is R2,000 cheaper today with 95% similar features.
            </p>
            <button className="mt-4 py-2.5 px-5 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/30 transition-all">
              Compare with XM4
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        </div>

        {/* Nearby Stores Tracking */}
        <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-3xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white rounded-2xl shadow-sm border border-slate-100 text-primary">
              <MapPin size={22} />
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 uppercase tracking-tighter">Available Nearby</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Sandton, Johannesburg</div>
            </div>
          </div>
          <Button variant="link" className="text-primary font-black text-xs uppercase tracking-widest">
            View Stores
          </Button>
        </div>

        {/* Legal & Compliance Footer */}
        <div className="mt-4 pt-6 border-t border-slate-100 text-center">
           <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
             Prices are live and validated by Peek Matching Engine. <br/>
             Peek iT is POPIA compliant. We may earn a commission from affiliate links.
           </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;