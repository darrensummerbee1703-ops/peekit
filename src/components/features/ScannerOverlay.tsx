import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, X, Camera, Zap, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ScannerOverlayProps {
  onClose: () => void;
  onScanResult: (result: string) => void;
}

const ScannerOverlay: React.FC<ScannerOverlayProps> = ({ onClose, onScanResult }) => {
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    // Mock scanning delay
    const timer = setTimeout(() => {
      setIsScanning(false);
      toast.success("Product identified!");
      onScanResult("1"); // Mocking identification of iPhone 15
    }, 2500);

    return () => clearTimeout(timer);
  }, [onScanResult]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-6"
    >
      <button 
        onClick={onClose}
        className="absolute top-10 right-6 p-2 bg-white/10 rounded-full text-white"
      >
        <X size={24} />
      </button>

      <div className="relative w-full max-w-sm aspect-square border-2 border-white/20 rounded-3xl overflow-hidden">
        {/* Mock Camera Feed */}
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
          <Camera size={64} className="text-white/20 animate-pulse" />
        </div>

        {/* Scanning Line */}
        <motion.div
          animate={{
            top: ['10%', '90%', '10%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"
        />

        {/* Corner Brackets */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
        <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
      </div>

      <div className="mt-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">
          {isScanning ? 'Scanning Product...' : 'Identifying...'}
        </h2>
        <p className="text-white/60">
          Point your camera at a barcode or the product itself
        </p>
      </div>

      <div className="mt-auto flex gap-4 w-full max-w-sm">
        <button className="flex-1 bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex flex-col items-center gap-2 text-white transition-colors">
          <Zap size={20} className="text-yellow-400" />
          <span className="text-xs font-bold uppercase">Flash</span>
        </button>
        <button className="flex-1 bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex flex-col items-center gap-2 text-white transition-colors">
          <Camera size={20} />
          <span className="text-xs font-bold uppercase">Upload</span>
        </button>
      </div>

      <div className="mt-8 flex items-center gap-2 text-primary text-xs font-bold bg-primary/10 px-4 py-2 rounded-full">
        <AlertCircle size={14} />
        AI-Powered Recognition Active
      </div>
    </motion.div>
  );
};

export default ScannerOverlay;