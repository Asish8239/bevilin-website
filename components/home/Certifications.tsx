"use client";

import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, BadgeCheck } from "lucide-react";

const certs = [
  {
    icon: Award,
    badge: "FSSAI",
    title: "FSSAI License",
    authority: "Food Safety & Standards Authority of India",
    color: "#0073bd",
    glow: "#0073bd33",
  },
  {
    icon: Shield,
    badge: "GST",
    title: "GST Certificate",
    authority: "Goods & Services Tax Network",
    color: "#53a847",
    glow: "#53a84733",
  },
  {
    icon: CheckCircle,
    badge: "DRUG",
    title: "Drug License",
    authority: "Central Drugs Standard Control Organisation",
    color: "#acc437",
    glow: "#acc43733",
  },
  {
    icon: BadgeCheck,
    badge: "GMP",
    title: "GMP Certified",
    authority: "Good Manufacturing Practice — WHO Standard",
    color: "#2e3192",
    glow: "#2e319233",
  },
];

export default function Certifications() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2e3192 0%, #0073bd 50%, #00aeef 100%)",
      }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              background: i % 2 === 0 ? "#acc43740" : "#ffffff20",
              left: `${(i * 8.5) % 100}%`,
              top: `${(i * 13) % 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-white/70">
            Compliance &amp; Trust
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certified &amp;{" "}
            <span style={{ color: "#acc437" }}>Verified</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Every license and certification is real, verified, and up to date
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.badge}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative rounded-2xl p-6 group"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: `0 8px 32px ${cert.glow}`,
                }}
              >
                {/* Hover glow border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${cert.color}30, transparent)`,
                    border: `1px solid ${cert.color}50`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: cert.glow, border: `1.5px solid ${cert.color}60` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-3"
                    style={{ background: cert.glow, color: "#fff" }}
                  >
                    {cert.badge}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{cert.title}</h3>

                  <p className="text-white/60 text-xs leading-relaxed">{cert.authority}</p>

                  <div className="flex items-center gap-1 mt-4" style={{ color: "#acc437" }}>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold">Verified</span>
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
