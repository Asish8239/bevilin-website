"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

export default function DoctorTrust() {
  const testimonials = [
    {
      name: "Dr. Amit Patel",
      designation: "MD, General Physician",
      location: "Mumbai",
      quote: "Bevilin&apos;s commitment to quality is unmatched. I confidently prescribe their medications to my patients.",
      rating: 5,
      avatar: "AP",
    },
    {
      name: "Dr. Sneha Reddy",
      designation: "MBBS, Pediatrician",
      location: "Bangalore",
      quote: "The consistency in quality and efficacy of Bevilin products makes them my first choice for pediatric care.",
      rating: 5,
      avatar: "SR",
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "MD, Cardiologist",
      location: "Delhi",
      quote: "Bevilin&apos;s pharmaceutical standards align with international protocols. Their products deliver reliable results.",
      rating: 5,
      avatar: "RK",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-gradient">Medical Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Healthcare experts across India rely on our pharmaceutical excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlowCard className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all h-full">
                <Quote className="w-12 h-12 text-primary-200 mb-6" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.designation}</div>
                    <div className="text-sm text-primary-600">{testimonial.location}</div>
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
