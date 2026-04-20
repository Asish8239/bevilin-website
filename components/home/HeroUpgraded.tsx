"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Shield, Award, Microscope, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import MedicineScan from "@/components/features/MedicineScan";

const trustItems = [
  { icon: Shield, label: "100% Authentic", value: "Guaranteed" },
  { icon: Award, label: "Quality", value: "Certified" },
  { icon: Microscope, label: "Research", value: "Driven" },
  { icon: CheckCircle, label: "Expert", value: "Support" },
];

export default function HeroUpgraded() {
  const words = ["Quality", "Trust", "Innovation", "Care"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative flex flex-col pt-20">
      {/* ── Hero content block ── */}
      <div
        className="relative flex items-center justify-center min-h-screen"
        style={{
          background:
            "linear-gradient(135deg, #2e3192 0%, #0073bd 30%, #00aeef 60%, #53a847 80%, #acc437 100%)",
        }}
      >
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(135deg, #2e3192 0%, #0073bd 30%, #00aeef 60%, #53a847 80%, #acc437 100%)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? "#53a847" : "#00aeef",
                left: `${(i * 5.1) % 100}%`,
                top: `${(i * 7.3) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

        {/* Animated blobs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #acc437 0%, transparent 70%)",
            top: "5%",
            left: "5%",
          }}
          animate={{ x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #00aeef 0%, transparent 70%)",
            bottom: "10%",
            right: "5%",
          }}
          animate={{ x: [0, -80, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Main layout: left text | right buttons + trust ── */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — centered heading + subheading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white mb-8"
              >
                <Award className="w-4 h-4 text-[#acc437]" />
                <span className="text-sm font-medium">
                  Licensed &amp; Certified Since 2022 · GMP Compliant
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  Healthcare Built on
                </motion.span>
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.8 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="block bg-gradient-to-r from-[#acc437] via-[#53a847] to-[#00aeef] bg-clip-text text-transparent"
                >
                  {words[currentWord]}
                </motion.span>
              </h1>

              {/* Subheading — corporate, no delivery language */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-white/85 max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                A licensed pharmaceutical company committed to manufacturing,
                research, and distributing quality medicines across India since 2009.
              </motion.p>
            </motion.div>

            {/* RIGHT — buttons + vertical trust indicators */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-10"
            >
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 w-full max-w-sm lg:max-w-none"
              >
                <Link href="/products" className="w-full sm:w-auto">
                  <MagneticButton className="group w-full px-8 py-4 bg-white text-[#2e3192] rounded-xl font-semibold transition-all hover:shadow-2xl hover:shadow-[#acc437]/30">
                    <span className="flex items-center justify-center gap-2">
                      <span>Explore Products</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </MagneticButton>
                </Link>

                <MedicineScan />

                <MagneticButton className="group w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Our Story
                  </div>
                </MagneticButton>
              </motion.div>

              {/* Vertical trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full"
              >
                {trustItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="flex flex-col items-center text-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-[#acc437]/60 transition-all cursor-default"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#acc437]" />
                    </div>
                    <div className="text-white font-bold text-sm">{item.value}</div>
                    <div className="text-white/70 text-xs leading-tight">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* BOTTOM CENTER — floating pharma grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-20 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl w-full max-w-2xl"
            >
              <div className="grid grid-cols-4 sm:grid-cols-9 gap-3">
                {[
                  { icon: "💊", label: "Tablets" },
                  { icon: "🧪", label: "Research" },
                  { icon: "🔬", label: "Testing" },
                  { icon: "💉", label: "Vaccines" },
                  { icon: "🏥", label: "Healthcare" },
                  { icon: "⚕️", label: "Medical" },
                  { icon: "🩺", label: "Diagnosis" },
                  { icon: "🧬", label: "Biotech" },
                  { icon: "💚", label: "Wellness" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.07 }}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="aspect-square bg-white/15 rounded-xl flex flex-col items-center justify-center p-2 border border-white/20 hover:border-white/50 transition-all cursor-pointer"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white text-[10px] font-medium mt-1 hidden sm:block">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Wave separator — below content, never overlaps ── */}
      <div className="w-full leading-none" style={{ marginTop: "-2px", background: "#fff" }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
