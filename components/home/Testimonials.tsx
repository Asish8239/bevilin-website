"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    location: "Mumbai",
    role: "General Physician",
    rating: 5,
    text: "Bevilin's products have consistently delivered reliable therapeutic outcomes. The quality and efficacy of their formulations give me confidence when prescribing to patients.",
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    role: "Pharmacist",
    rating: 5,
    text: "Affordable, genuine, and effective. Bevilin medicines have helped many of my customers manage their conditions better. Trusted products at accessible prices.",
    avatar: "RK",
  },
  {
    name: "Anita Desai",
    location: "Bangalore",
    role: "Patient",
    rating: 5,
    text: "I have been using Bevilin's cardiac care range for over a year. The quality is consistent and my health has improved significantly. Highly recommended.",
    avatar: "AD",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, #acc43708 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
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
            Trusted Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span style={{ color: "#acc437" }}>Customers Say</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Trusted by healthcare professionals and patients across India
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
              whileHover={{ y: -6 }}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Quote
                className="absolute top-6 right-6 w-10 h-10 opacity-10"
                style={{ color: "#0073bd" }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #2e3192, #0073bd)",
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-xs text-gray-500">{testimonial.role} · {testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
