"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "50,000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Heart, label: "Products", value: "5,000+" },
    { icon: TrendingUp, label: "Growth Rate", value: "200%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            About <span className="text-gradient">Bevilin</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Your trusted partner in healthcare and wellness
          </p>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2009, Bevilin has been at the forefront of
                providing quality pharmaceutical products and healthcare
                solutions to millions of customers across the country.
              </p>
              <p>
                Our journey began with a simple mission: to make healthcare
                accessible, affordable, and reliable for everyone. Over the
                years, we&apos;ve grown from a small pharmacy to a trusted healthcare
                partner serving over 50,000 satisfied customers.
              </p>
              <p>
                We believe in the power of quality healthcare and the difference
                it can make in people&apos;s lives. That&apos;s why we source only the
                best products from certified manufacturers and maintain strict
                quality control standards.
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
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-primary rounded-3xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              To provide accessible, affordable, and quality healthcare products
              while maintaining the highest standards of service and customer
              satisfaction.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To become India&apos;s most trusted healthcare partner, leveraging
              technology and innovation to make healthcare accessible to every
              household.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
