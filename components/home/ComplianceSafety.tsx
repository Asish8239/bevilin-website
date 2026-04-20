"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, FileCheck, Lock } from "lucide-react";

export default function ComplianceSafety() {
  const compliance = [
    {
      icon: Shield,
      title: "Drug Safety",
      items: [
        "Pharmacovigilance monitoring",
        "Adverse event reporting",
        "Risk management systems",
        "Patient safety protocols",
      ],
    },
    {
      icon: FileCheck,
      title: "Regulatory Standards",
      items: [
        "FDA guidelines compliance",
        "WHO-GMP certified",
        "CDSCO approved",
        "International quality standards",
      ],
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      items: [
        "Batch testing protocols",
        "Stability studies",
        "Contamination control",
        "Documentation systems",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      items: [
        "Patient data protection",
        "Secure transactions",
        "Privacy compliance",
        "Encrypted systems",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compliance & <span className="text-gradient">Safety</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Adhering to the highest standards of pharmaceutical safety and regulatory compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {compliance.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.items.map((subItem, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{subItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
