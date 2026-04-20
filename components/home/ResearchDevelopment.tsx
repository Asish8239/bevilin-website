"use client";

import { motion } from "framer-motion";
import { Microscope, FlaskConical, Dna, Sparkles } from "lucide-react";

export default function ResearchDevelopment() {
  const features = [
    {
      icon: Microscope,
      title: "Advanced Research",
      description: "State-of-the-art laboratories equipped with cutting-edge technology for pharmaceutical research.",
    },
    {
      icon: FlaskConical,
      title: "Quality Testing",
      description: "Rigorous quality control processes ensuring every product meets international standards.",
    },
    {
      icon: Dna,
      title: "Innovation",
      description: "Continuous development of new formulations and improved drug delivery systems.",
    },
    {
      icon: Sparkles,
      title: "Clinical Trials",
      description: "Comprehensive clinical testing protocols for safety and efficacy validation.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-secondary-900 to-gray-900 text-white relative">
      <div className="absolute inset-0 opacity-10 -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research & Development
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pioneering pharmaceutical innovation through dedicated research and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all h-full">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-12 flex-wrap">
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
                <div className="text-gray-300">Research Projects</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-4xl font-bold text-secondary-400 mb-2">100+</div>
                <div className="text-gray-300">Scientists</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">25+</div>
                <div className="text-gray-300">Patents</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
