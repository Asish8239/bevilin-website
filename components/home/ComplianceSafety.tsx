"use client";

import { motion } from "framer-motion";
import { Shield, FlaskConical, HeartPulse, Users, CheckCircle } from "lucide-react";

const commitments = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Strict adherence to CDSCO, WHO-GMP, and national drug regulatory guidelines across all operations.",
    points: [
      "CDSCO approved processes",
      "WHO-GMP certified facility",
      "Continuous regulatory monitoring",
    ],
    color: "#0073bd",
    glow: "#0073bd18",
  },
  {
    icon: FlaskConical,
    title: "Quality Assurance",
    description:
      "Every batch undergoes rigorous testing and documentation before release to ensure consistent efficacy.",
    points: [
      "Batch-level quality testing",
      "Stability and purity studies",
      "Contamination control protocols",
    ],
    color: "#53a847",
    glow: "#53a84718",
  },
  {
    icon: HeartPulse,
    title: "Patient Safety First",
    description:
      "Our pharmacovigilance systems and adverse event monitoring put patient well-being at the centre of everything.",
    points: [
      "Pharmacovigilance monitoring",
      "Adverse event reporting",
      "Risk management systems",
    ],
    color: "#e53e3e",
    glow: "#e53e3e18",
  },
  {
    icon: Users,
    title: "Ethical Practices",
    description:
      "Transparent, responsible pharmaceutical practices that uphold the trust of healthcare professionals and patients.",
    points: [
      "Transparent supply chain",
      "Responsible marketing",
      "Healthcare professional partnerships",
    ],
    color: "#acc437",
    glow: "#acc43718",
  },
];

export default function ComplianceSafety() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, #0073bd08 0%, transparent 70%)",
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
            Our Standards
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Compliance &amp;{" "}
            <span style={{ color: "#acc437" }}>Quality Commitment</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Upholding the highest standards of pharmaceutical integrity, safety, and ethical practice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col gap-5"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: item.glow }}
                >
                  <Icon className="w-7 h-7" style={{ color: item.color }} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>

                {/* Points */}
                <ul className="space-y-2 mt-auto">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: item.color }}
                      />
                      <span className="text-xs text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
