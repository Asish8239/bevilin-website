"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const testimonials = [
  {
    name: "Dr. Amit Patel",
    designation: "MD, General Physician",
    location: "Mumbai",
    quote: "Bevilin's commitment to quality is unmatched. I confidently prescribe their medications to my patients.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Dr. Meera Nair",
    designation: "MD, Internal Medicine",
    location: "Bangalore",
    quote: "The consistency in quality and efficacy of Bevilin products makes them my first choice for patient care.",
    rating: 5,
    avatar: "MN",
  },
  {
    name: "Dr. Rajesh Kumar",
    designation: "MD, Cardiologist",
    location: "Delhi",
    quote: "Bevilin's pharmaceutical standards align with international protocols. Their products deliver reliable results.",
    rating: 5,
    avatar: "RK",
  },
];

export default function DoctorTrust() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent -z-10" />

      <div className="container mx-auto px-4 relative z-10">
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
            Professional Trust
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span style={{ color: "#acc437" }}>Medical Professionals</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Healthcare experts across India rely on our pharmaceutical excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all h-full">
                <Quote className="w-10 h-10 mb-6 opacity-20" style={{ color: "#0073bd" }} />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #2e3192, #0073bd)" }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.designation}</div>
                    <div className="text-xs" style={{ color: "#0073bd" }}>{testimonial.location}</div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
