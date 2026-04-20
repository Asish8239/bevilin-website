"use client";

import { motion } from "framer-motion";
import { Shield, FlaskConical, Award, HeadphonesIcon, Microscope } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const features = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "All products sourced directly from certified manufacturers and quality-verified at every stage.",
  },
  {
    icon: FlaskConical,
    title: "Pharmaceutical Manufacturing",
    description: "State-of-the-art manufacturing processes adhering to GMP and international quality standards.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "GMP certified operations with rigorous batch testing and quality control protocols.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Expert pharmaceutical assistance and customer support whenever you need it.",
  },
  {
    icon: Microscope,
    title: "Research Driven",
    description: "Continuous investment in pharmaceutical research and development for better formulations.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #00aeef08 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#0073bd" }}
          >
            Why Bevilin
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span style={{ color: "#acc437" }}>Bevilin</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A pharmaceutical company built on compliance, quality, and trust
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={
                // Centre the last row items when there's an odd count
                features.length % 3 !== 0 && index === features.length - 1
                  ? "lg:col-start-2 w-full"
                  : "w-full"
              }
            >
              <GlowCard className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #0073bd20, #2e319220)"
                        : "linear-gradient(135deg, #acc43720, #53a84720)",
                  }}
                >
                  <feature.icon
                    className="w-7 h-7"
                    style={{ color: index % 2 === 0 ? "#0073bd" : "#53a847" }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
