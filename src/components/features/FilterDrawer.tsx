import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white z-[70] rounded-t-[40px] shadow-2xl overflow-hidden max-h-[90vh]"
          >
            <div className="p-6 pb-2 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Refine Search</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Advanced Filters</p>
              </div>
              <button onClick={onClose} className="p-2.5 bg-slate-100 rounded-2xl text-slate-600">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh] flex flex-col gap-8">
              {/* Brand Filter */}
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Retailers</h3>
                <div className="flex flex-wrap gap-2">
                  {['Takealot', 'Amazon SA', 'Loot', 'Zando', 'Superbalist'].map((brand) => (
                    <Badge key={brand} variant="outline" className="px-4 py-2 rounded-xl text-xs font-bold border-slate-200 hover:border-primary transition-colors cursor-pointer bg-white">
                      {brand}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Price Range (ZAR)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-2xl border border-slate-100 bg-slate-50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Min</span>
                    <div className="text-sm font-bold text-slate-900 mt-1">R0</div>
                  </div>
                  <div className="p-3 rounded-2xl border border-slate-100 bg-slate-50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Max</span>
                    <div className="text-sm font-bold text-slate-900 mt-1">R50,000+</div>
                  </div>
                </div>
              </div>

              {/* Condition */}
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Condition</h3>
                <div className="flex gap-3">
                  {['New', 'Refurbished', 'Used'].map((cond) => (
                    <button key={cond} className="flex-1 py-3 px-2 rounded-2xl border-2 border-slate-100 text-xs font-black text-slate-500 hover:border-primary hover:text-primary transition-all">
                      {cond}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Min. Rating</h3>
                <div className="flex justify-between items-center bg-slate-50 p-2 rounded-2xl">
                   {[1, 2, 3, 4, 5].map((star) => (
                     <button key={star} className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${star >= 4 ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400'}`}>
                       {star}★
                     </button>
                   ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex gap-4">
              <Button variant="outline" className="flex-1 h-14 rounded-2xl font-black text-slate-500 border-slate-200">
                Clear All
              </Button>
              <Button className="flex-[2] h-14 rounded-2xl font-black bg-primary text-white shadow-xl shadow-primary/30">
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterDrawer;