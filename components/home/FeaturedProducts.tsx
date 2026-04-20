"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";

function ProductScrollCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-48 bg-white rounded-2xl overflow-hidden group cursor-pointer"
      style={{ boxShadow: "0 4px 24px rgba(46,49,146,0.10)" }}
    >
      <div className="relative w-full h-44 bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          sizes="192px"
        />
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  const doubled = [...products, ...products];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #00aeef18 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #acc43718 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#0073bd" }}
            >
              Our Range
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured{" "}
              <span style={{ color: "#acc437" }}>Products</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
            style={{ color: "#0073bd" }}
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {products.length > 0 && (
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge fades */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #f9fafb, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #f9fafb, transparent)" }}
          />

          <div className="overflow-hidden">
            <div
              className="flex gap-5 px-8"
              style={{
                animation: isPaused ? "none" : "scrollTrack 40s linear infinite",
                width: "max-content",
              }}
            >
              {doubled.map((product, i) => (
                <Link key={`${product.id}-${i}`} href={`/products/${product.id}`}>
                  <ProductScrollCard product={product} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {products.length === 0 && (
        <div className="flex gap-5 px-8 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-44 bg-white rounded-2xl animate-shimmer" />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 mt-10 md:hidden text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #acc437 0%, #53a847 100%)" }}
        >
          View All Products
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
