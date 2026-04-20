"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const trademarks = [
  { name: "ANGOSTAT" },
  { name: "BEVIPAN" },
  { name: "CLOPEL" },
  { name: "CORECIN" },
  { name: "DAPSIT" },
  { name: "GLUWIN" },
  { name: "TESLAR" },
];

const colors = [
  { bg: "#2e319210", border: "#2e319230", text: "#2e3192" },
  { bg: "#0073bd10", border: "#0073bd30", text: "#0073bd" },
  { bg: "#00aeef10", border: "#00aeef30", text: "#00aeef" },
  { bg: "#53a84710", border: "#53a84730", text: "#53a847" },
  { bg: "#acc43710", border: "#acc43730", text: "#acc437" },
  { bg: "#0073bd10", border: "#0073bd30", text: "#0073bd" },
  { bg: "#2e319210", border: "#2e319230", text: "#2e3192" },
];

export default function Trademarks() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, #0073bd06 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
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
            Intellectual Property
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Registered{" "}
            <span style={{ color: "#acc437" }}>Trademarks</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Bevilin&apos;s portfolio of registered pharmaceutical product trademarks
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {trademarks.map((tm, index) => {
            const c = colors[index % colors.length];
            return (
              <motion.div
                key={tm.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border text-center transition-all group"
                style={{
                  background: "#fff",
                  borderColor: c.border,
                  boxShadow: "0 4px 20px rgba(46,49,146,0.06)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: c.bg }}
                />
                <div
                  className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black"
                  style={{ background: c.bg, color: c.text }}
                >
                  {tm.name.slice(0, 2)}
                </div>
                <div className="relative z-10">
                  <p className="font-bold text-gray-900 text-sm">{tm.name}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <BadgeCheck className="w-3 h-3" style={{ color: c.text }} />
                    <span className="text-xs" style={{ color: c.text }}>
                      Registered
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
