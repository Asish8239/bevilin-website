"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Pill, Heart, Stethoscope, Syringe, Activity, FlaskConical } from "lucide-react";

const categories = [
  {
    icon: Pill,
    name: "Tablets & Capsules",
    count: "2000+",
    gradient: "linear-gradient(135deg, #2e3192 0%, #0073bd 100%)",
    link: "/products?category=tablets",
  },
  {
    icon: Heart,
    name: "Cardiac Care",
    count: "300+",
    gradient: "linear-gradient(135deg, #0073bd 0%, #00aeef 100%)",
    link: "/products?category=cardiac",
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    count: "1500+",
    gradient: "linear-gradient(135deg, #53a847 0%, #acc437 100%)",
    link: "/products?category=general",
  },
  {
    icon: Syringe,
    name: "Diabetes Care",
    count: "400+",
    gradient: "linear-gradient(135deg, #acc437 0%, #53a847 100%)",
    link: "/products?category=diabetes",
  },
  {
    icon: Activity,
    name: "Pain Relief",
    count: "600+",
    gradient: "linear-gradient(135deg, #00aeef 0%, #0073bd 100%)",
    link: "/products?category=pain-relief",
  },
  {
    icon: FlaskConical,
    name: "Vitamins & Supplements",
    count: "800+",
    gradient: "linear-gradient(135deg, #0073bd 0%, #2e3192 100%)",
    link: "/products?category=vitamins",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #00aeef0d 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#0073bd" }}
          >
            Therapeutic Areas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product{" "}
            <span style={{ color: "#acc437" }}>Categories</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Comprehensive pharmaceutical solutions across multiple therapeutic areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={category.link} className="block h-full">
                <div
                  className="relative rounded-2xl p-8 h-56 flex flex-col justify-between overflow-hidden group"
                  style={{ background: category.gradient }}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                      {category.count} Products
                    </p>
                  </div>

                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1 text-white/90 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
