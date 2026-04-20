"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, BadgeCheck } from "lucide-react";

const trademarks = [
  {
    name: "ANGOSTAT",
    file: "BEVILIN_S ANGOSTAT REG.pdf",
    description: "Registered pharmaceutical trademark",
  },
  {
    name: "BEVIPAN",
    file: "BEVILIN_S BEVIPAN.pdf",
    description: "Registered pharmaceutical trademark",
  },
  {
    name: "CLOPEL",
    file: "BEVILIN_S CLOPEL REG.pdf",
    description: "Registered pharmaceutical trademark",
  },
  {
    name: "CORECIN",
    file: "BEVILIN_S CORECIN.pdf",
    description: "Registered pharmaceutical trademark",
  },
  {
    name: "DAPSIT",
    file: "BEVILIN_S DAPSIT REG.pdf",
    description: "Registered pharmaceutical trademark",
  },
  {
    name: "GLUWIN",
    file: "BEVILIN_S GLUWIN REG.pdf",
    description: "Registered pharmaceutical trademark",
  },
  {
    name: "TESLAR",
    file: "BEVILIN_S TESLAR REG.pdf",
    description: "Registered pharmaceutical trademark",
  },
];

// Color palette cycling through brand colors
const colors = [
  { bg: "#2e319210", border: "#2e319230", text: "#2e3192" },
  { bg: "#0073bd10", border: "#0073bd30", text: "#0073bd" },
  { bg: "#00aeef10", border: "#00aeef30", text: "#00aeef" },
  { bg: "#53a84710", border: "#53a84730", text: "#53a847" },
  { bg: "#acc43710", border: "#acc43730", text: "#acc437" },
  { bg: "#0073bd10", border: "#0073bd30", text: "#0073bd" },
  { bg: "#2e319210", border: "#2e319230", text: "#2e3192" },
];

type Trademark = (typeof trademarks)[number];

function TrademarkModal({
  tm,
  onClose,
}: {
  tm: Trademark;
  onClose: () => void;
}) {
  const pdfPath = `/images/trademarks/${tm.file}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Modal header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
          style={{ background: "linear-gradient(135deg, #2e3192, #0073bd)" }}
        >
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-5 h-5 text-[#acc437]" />
            <span className="text-white font-bold text-lg">{tm.name}</span>
            <span className="text-white/60 text-sm">— Registered Trademark</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open PDF
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF embed */}
        <div className="flex-1 min-h-0">
          <iframe
            src={`${pdfPath}#toolbar=0&navpanes=0`}
            className="w-full h-full"
            style={{ minHeight: "60vh" }}
            title={`${tm.name} Trademark Certificate`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Trademarks() {
  const [selected, setSelected] = useState<Trademark | null>(null);

  return (
    <section className="py-20 bg-gray-50 relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #0073bd06 0%, transparent 70%)",
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
              <motion.button
                key={tm.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelected(tm)}
                className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border text-center transition-all group"
                style={{
                  background: "#fff",
                  borderColor: c.border,
                  boxShadow: "0 4px 20px rgba(46,49,146,0.06)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: c.bg }}
                />

                {/* Trademark icon */}
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

                <p className="relative z-10 text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                  Click to view →
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <TrademarkModal tm={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
