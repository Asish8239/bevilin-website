"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Building2, Globe, ShieldCheck, FileText, TrendingUp } from "lucide-react";

const milestones = [
  {
    icon: Building2,
    title: "Company Incorporated",
    description: "Bevilin Pharma Private Limited officially incorporated and registered.",
    year: "2010",
    color: "#0073bd",
    glow: "#0073bd20",
  },
  {
    icon: ShieldCheck,
    title: "FSSAI Licensed",
    description: "Received Food Safety & Standards Authority of India license for pharmaceutical operations.",
    year: "2022",
    color: "#53a847",
    glow: "#53a84720",
  },
  {
    icon: FileText,
    title: "Drug License Granted",
    description: "Obtained Drug License from Central Drugs Standard Control Organisation.",
    year: "2022",
    color: "#acc437",
    glow: "#acc43720",
  },
  {
    icon: BadgeCheck,
    title: "GST Registered",
    description: "Completed GST registration, establishing full tax compliance for business operations.",
    year: "2022",
    color: "#2e3192",
    glow: "#2e319220",
  },
  {
    icon: Globe,
    title: "Digital Operations",
    description: "Launched digital platform and online presence to expand pharmaceutical reach across India.",
    year: "2022",
    color: "#00aeef",
    glow: "#00aeef20",
  },
  {
    icon: TrendingUp,
    title: "Trademark Registrations",
    description: "Registered multiple pharmaceutical product trademarks including ANGOSTAT, BEVIPAN, CLOPEL, CORECIN, DAPSIT, GLUWIN, and TESLAR.",
    year: "2022",
    color: "#53a847",
    glow: "#53a84720",
  },
];

export default function Milestones() {
  return (
    <section className="py-20 bg-white relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #acc43708 0%, transparent 70%)",
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
            Key Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span style={{ color: "#acc437" }}>Milestones</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Significant achievements that define Bevilin&apos;s growth and compliance journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-2xl p-6 border transition-all group"
                style={{
                  background: "#fff",
                  borderColor: "#f1f5f9",
                  boxShadow: "0 4px 24px rgba(46,49,146,0.06)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: item.glow }}
                />

                <div className="relative z-10">
                  {/* Year badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: item.glow, border: `1.5px solid ${item.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: item.glow, color: item.color }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
