"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Heart, Share2, Check } from "lucide-react";
import { Product } from "@/types";
import { addToCart } from "@/lib/cart";
import { addToRecentlyViewed } from "@/lib/recentlyViewed";
import Tabs from "@/components/ui/Tabs";
import RippleButton from "@/components/ui/RippleButton";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === params.id);
        if (found) {
          setProduct(found);
          addToRecentlyViewed(found);
        }
      });
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  const tabs = [
    {
      label: "Benefits",
      content: (
        <ul className="space-y-3">
          {product.benefits?.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "Usage",
      content: <p className="text-gray-700 leading-relaxed">{product.usage}</p>,
    },
    {
      label: "Description",
      content: <p className="text-gray-700 leading-relaxed">{product.description}</p>,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-2">
                {[product.image, product.image, product.image, product.image].map(
                  (img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 transition-all ${
                        selectedImage === i
                          ? "border-primary-500 scale-105"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-2">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg">{product.description}</p>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary-600">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>

              <div className="mb-6">
                <Tabs tabs={tabs} />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-5 py-3 hover:bg-gray-100 transition-colors font-semibold"
                  >
                    -
                  </button>
                  <span className="px-8 py-3 border-x-2 border-gray-300 font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-5 py-3 hover:bg-gray-100 transition-colors font-semibold"
                  >
                    +
                  </button>
                </div>
                <span className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
                </span>
              </div>

              <div className="flex gap-4">
                <RippleButton
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </RippleButton>
                <button className="p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-primary-500 transition-all">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-primary-500 transition-all">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
