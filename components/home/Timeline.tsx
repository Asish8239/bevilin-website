"use client";

import { motion } from "framer-motion";
import { Calendar, ShieldCheck } from "lucide-react";
import GridBackground from "@/components/backgrounds/GridBackground";

const milestones = [
  {
    year: "2010",
    icon: Calendar,
    title: "Foundation",
    description:
      "Bevilin Pharma Private Limited was incorporated with a mission to make quality pharmaceutical products accessible across India.",
    accent: false,
  },
  {
    year: "2022",
    icon: ShieldCheck,
    title: "Establishment, Licensing & Digital Transformation",
    description:
      "Received FSSAI License, Drug License, and GST Registration. Launched digital operations and established full regulatory compliance — marking Bevilin as a fully licensed pharmaceutical company.",
    accent: true,
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
      <GridBackground />

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
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span style={{ color: "#acc437" }}>Journey</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From incorporation in 2010 to a fully licensed pharmaceutical company in 2022
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-start gap-6 mb-16 last:mb-0 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Text block */}
                <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                  <div
                    className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4 text-white"
                    style={{
                      background: milestone.accent
                        ? "linear-gradient(135deg, #acc437, #53a847)"
                        : "linear-gradient(135deg, #0073bd, #2e3192)",
                    }}
                  >
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {milestone.description}
                  </p>
                </div>

                {/* Icon node */}
                <div className="relative flex flex-col items-center flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                    style={{
                      background: milestone.accent
                        ? "linear-gradient(135deg, #acc437, #53a847)"
                        : "linear-gradient(135deg, #0073bd, #2e3192)",
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  {index < milestones.length - 1 && (
                    <div
                      className="w-0.5 mt-3"
                      style={{
                        height: "5rem",
                        background: "linear-gradient(to bottom, #0073bd80, transparent)",
                      }}
                    />
                  )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
