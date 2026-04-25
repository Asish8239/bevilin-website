"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Customers Served", value: "50,000+" },
    { icon: Award, label: "Trademarks Registered", value: "8+" },
    { icon: Heart, label: "Therapeutic Areas", value: "13" },
    { icon: TrendingUp, label: "Year Incorporated", value: "2022" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            About <span className="text-gradient">Bevilin</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            A licensed pharmaceutical company built on quality, compliance, and trust
          </p>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The vision for Bevilin was conceived in 2010 — a commitment to making quality
                and affordable pharmaceutical products accessible to patients across India.
                What began as an idea rooted in healthcare values gradually took shape over
                more than a decade of planning, research, and groundwork.
              </p>
              <p>
                In 2022, Bevilin Pharma Private Limited was officially incorporated, marking
                a significant milestone in the company&apos;s journey. With the receipt of its
                FSSAI License, Drug License, and GST Registration, Bevilin established itself
                as a fully compliant and licensed pharmaceutical entity — ready to serve
                healthcare professionals and patients with integrity.
              </p>
              <p>
                Since incorporation, Bevilin has grown steadily — expanding its product
                portfolio across 13 therapeutic areas, registering multiple trademarks for
                its pharmaceutical brands, and building strong relationships with healthcare
                professionals across India. Every step of this journey has been guided by
                a commitment to ethical practices, regulatory compliance, and patient safety.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto text-primary-500 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-primary rounded-3xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-8">
              To manufacture, market, and distribute high-quality pharmaceutical products
              that meet the needs of patients and healthcare professionals — with an
              unwavering commitment to safety, efficacy, and regulatory compliance.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To become a trusted name in the Indian pharmaceutical industry — known for
              quality products, ethical business practices, and a genuine contribution
              to improving public health outcomes across the country.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
