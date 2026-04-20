"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden group h-full flex flex-col"
        style={{ boxShadow: "0 4px 24px rgba(46,49,146,0.08)" }}
      >
        <div className="relative aspect-square bg-gray-50 p-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <span
            className="text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "#0073bd" }}
          >
            {product.category}
          </span>
          <h3
            className="text-base font-bold text-gray-900 line-clamp-2 group-hover:transition-colors"
            style={{ lineHeight: "1.5" }}
          >
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mt-2 line-clamp-2 flex-1">
            {product.description}
          </p>

          <div
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
            style={{ color: "#acc437" }}
          >
            Learn More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
