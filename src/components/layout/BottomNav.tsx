import React from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Tag, Heart, User, Camera, Scan, Sparkles } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onScanClick: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, onScanClick }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'discover', icon: Compass, label: 'For You' },
    { id: 'deals', icon: Tag, label: 'Deals' },
    { id: 'wishlist', icon: Heart, label: 'Saved' },
    { id: 'profile', icon: User, label: 'Account' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-2 pb-8 flex justify-between items-center z-50 rounded-t-[32px] shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative flex flex-col items-center gap-1.5 transition-all duration-300 ${
            activeTab === tab.id ? 'text-primary' : 'text-slate-400'
          }`}
        >
          <div className={`p-1 rounded-xl transition-all ${activeTab === tab.id ? 'bg-primary/5 scale-110' : ''}`}>
            <tab.icon size={22} className={activeTab === tab.id ? 'fill-primary/10' : ''} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-tighter ${activeTab === tab.id ? 'opacity-100' : 'opacity-60'}`}>
            {tab.label}
          </span>
          {activeTab === tab.id && (
            <motion.div
              layoutId="navIndicator"
              className="absolute -top-3 w-6 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)] shadow-primary/40"
            />
          )}
        </button>
      ))}
      
      {/* Floating Scan Button Upgrade */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={onScanClick}
          className="w-16 h-16 bg-slate-900 text-white rounded-[24px] flex items-center justify-center shadow-2xl shadow-slate-900/30 border-4 border-white relative overflow-hidden group"
        >
          <Scan size={28} className="relative z-10 transition-transform group-hover:rotate-90 duration-500" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.button>
        <div className="mt-2 bg-slate-900 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">
          Scan
        </div>
      </div>
    </div>
  );
};

export default BottomNav;