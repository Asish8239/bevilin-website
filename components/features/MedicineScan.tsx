"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Upload, X, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function MedicineScan() {
  const [isOpen, setIsOpen] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<{
    name: string;
    category: string;
    price: number;
    image: string;
  } | null>(null);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setResult({
        name: "Paracetamol 500mg",
        category: "Pain Relief",
        price: 45,
        image: "https://via.placeholder.com/200x200/22c55e/ffffff?text=Medicine",
      });
    }, 2000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-glow transition-all"
      >
        <Camera className="w-5 h-5" />
        Scan Medicine
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Medicine Scanner
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {!result ? (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-primary-500 transition-colors cursor-pointer">
                    <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">
                      Upload medicine image
                    </p>
                    <p className="text-sm text-gray-400">
                      PNG, JPG up to 10MB
                    </p>
                  </div>

                  <button
                    onClick={handleScan}
                    disabled={scanning}
                    className="w-full bg-gradient-primary text-white py-4 rounded-xl font-semibold hover:shadow-glow transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {scanning ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Camera className="w-5 h-5" />
                        Scan Demo
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-green-600 mb-4">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-semibold">Medicine Detected!</span>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 bg-white rounded-lg flex-shrink-0">
                        <Image
                          src={result.image}
                          alt={result.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          {result.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {result.category}
                        </p>
                        <p className="text-2xl font-bold text-primary-600">
                          ₹{result.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-primary text-white py-3 rounded-xl font-semibold hover:shadow-glow transition-all">
                      View Product
                    </button>
                    <button
                      onClick={() => setResult(null)}
                      className="px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold hover:border-primary-500 transition-colors"
                    >
                      Scan Again
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
