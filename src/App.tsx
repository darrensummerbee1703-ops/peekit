import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import BottomNav from './components/layout/BottomNav';
import ScannerOverlay from './components/features/ScannerOverlay';
import { Product } from './types';
import { MOCK_PRODUCTS } from './lib/constants';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showScanner, setShowScanner] = useState(false);

  // Handle Scan Result
  const handleScanResult = (productId: string) => {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (product) {
      setTimeout(() => {
        setShowScanner(false);
        setSelectedProduct(product);
      }, 1500);
    } else {
      toast.error("Product not found");
      setShowScanner(false);
    }
  };

  const renderContent = () => {
    if (selectedProduct) {
      return (
        <ProductDetails 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return <Home onProductClick={setSelectedProduct} onScanClick={() => setShowScanner(true)} />;
      case 'discover':
        return <Discover onProductClick={setSelectedProduct} />;
      case 'profile':
        return <Profile />;
      case 'deals':
      case 'wishlist':
        return (
          <div className="h-screen flex flex-col items-center justify-center p-10 text-center gap-4">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
               {activeTab === 'deals' ? '🏷️' : '❤️'}
            </div>
            <h2 className="text-xl font-bold text-slate-900 capitalize">{activeTab} Page</h2>
            <p className="text-slate-500">This feature is coming soon in the next update!</p>
            <button 
              onClick={() => setActiveTab('home')}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-xl font-bold"
            >
              Back to Home
            </button>
          </div>
        );
      default:
        return <Home onProductClick={setSelectedProduct} onScanClick={() => setShowScanner(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>

      {!selectedProduct && !showScanner && (
        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onScanClick={() => setShowScanner(true)} 
        />
      )}

      <AnimatePresence>
        {showScanner && (
          <ScannerOverlay 
            onClose={() => setShowScanner(false)} 
            onScanResult={handleScanResult} 
          />
        )}
      </AnimatePresence>

      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
}

export default App;