import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Bell, TrendingDown, Package, Zap } from 'lucide-react';
import { MOCK_NOTIFICATIONS, MOCK_PRODUCTS } from '@/lib/constants';
import { Product } from '@/types';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (product: Product) => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ isOpen, onClose, onProductClick }) => {
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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900">Alert Center</h2>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-0.5">Smart Price Tracking</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {MOCK_NOTIFICATIONS.map((notif) => {
                const product = notif.productId ? MOCK_PRODUCTS.find(p => p.id === notif.productId) : null;
                
                return (
                  <div 
                    key={notif.id}
                    className={`p-4 rounded-[24px] border transition-all ${
                      notif.isRead ? 'bg-white border-slate-100 opacity-70' : 'bg-primary/5 border-primary/10 shadow-sm ring-1 ring-primary/5'
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        notif.type === 'price_drop' ? 'bg-green-100 text-green-600' :
                        notif.type === 'restock' ? 'bg-blue-100 text-blue-600' : 'bg-primary/10 text-primary'
                      }`}>
                        {notif.type === 'price_drop' ? <TrendingDown size={22} /> :
                         notif.type === 'restock' ? <Package size={22} /> : <Zap size={22} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-black text-slate-900">{notif.title}</span>
                          <span className="text-[10px] text-slate-400 font-bold">{notif.timestamp}</span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          {notif.message}
                        </p>
                        
                        {product && (
                          <button 
                            onClick={() => {
                              onProductClick(product);
                              onClose();
                            }}
                            className="mt-3 flex items-center gap-2 p-2 bg-white rounded-xl border border-slate-100 w-full hover:border-primary transition-colors text-left"
                          >
                            <img src={product.image} className="w-8 h-8 rounded-lg object-cover" alt="" />
                            <div className="flex-1 min-w-0">
                                <div className="text-[10px] font-bold text-slate-900 truncate">{product.name}</div>
                                <div className="text-[9px] text-primary font-black">View Deal</div>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 border-t border-slate-100">
               <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                 Mark all as read
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationCenter;