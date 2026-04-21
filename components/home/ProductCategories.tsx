"use client";

import { motion } from "framer-motion";

const therapeuticAreas = [
  { label: "Neuropsychiatry",        icon: "🧠", color: "#2e3192", glow: "#2e319220" },
  { label: "Cardiovascular",         icon: "❤️", color: "#e53e3e", glow: "#e53e3e20" },
  { label: "Gastroenterology",       icon: "🫁", color: "#0073bd", glow: "#0073bd20" },
  { label: "Pain & Surgery",         icon: "💊", color: "#7c3aed", glow: "#7c3aed20" },
  { label: "Ophthalmology",          icon: "👁️", color: "#00aeef", glow: "#00aeef20" },
  { label: "Respiratory",            icon: "🌬️", color: "#0891b2", glow: "#0891b220" },
  { label: "Gynaecology",            icon: "🌸", color: "#db2777", glow: "#db277720" },
  { label: "Urology",                icon: "🔬", color: "#0073bd", glow: "#0073bd20" },
  { label: "Oncology",               icon: "🎗️", color: "#9333ea", glow: "#9333ea20" },
  { label: "Dermatology",            icon: "🩺", color: "#f59e0b", glow: "#f59e0b20" },
  { label: "Anti-infectives",        icon: "🛡️", color: "#53a847", glow: "#53a84720" },
  { label: "Nephrology",             icon: "⚕️", color: "#2e3192", glow: "#2e319220" },
  { label: "Consumer Health Care",   icon: "🏥", color: "#acc437", glow: "#acc43720" },
];

export default function ProductCategories() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #00aeef0d 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#0073bd" }}
          >
            Our Focus Areas
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Therapeutic{" "}
            <span style={{ color: "#acc437" }}>Areas</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Comprehensive pharmaceutical solutions across multiple therapeutic disciplines
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 md:gap-4">
          {therapeuticAreas.map((area, index) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white cursor-default transition-all duration-300 hover:shadow-lg"
              style={{
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Icon circle with glow */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: area.glow,
                  boxShadow: `0 0 0 0 ${area.color}00`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px 4px ${area.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${area.color}00`;
                }}
              >
                <span role="img" aria-label={area.label}>{area.icon}</span>
              </div>

              {/* Label */}
              <p
                className="text-xs font-semibold text-center text-gray-700 group-hover:text-gray-900 leading-tight transition-colors"
              >
                {area.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
