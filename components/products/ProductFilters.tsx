"use client";

import { motion } from "framer-motion";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  const categories = [
    { id: "all", label: "All Products" },
    { id: "Vitamins & Supplements", label: "Vitamins & Supplements" },
    { id: "Pain Relief", label: "Pain Relief" },
    { id: "Skincare", label: "Skincare" },
    { id: "Personal Care", label: "Personal Care" },
    { id: "Ayurvedic", label: "Ayurvedic" },
    { id: "Baby Care", label: "Baby Care" },
    { id: "Diabetes Care", label: "Diabetes Care" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
              selectedCategory === category.id
                ? "bg-gradient-primary text-white font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
