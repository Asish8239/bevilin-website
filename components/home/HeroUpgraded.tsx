"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Shield, Award, Microscope, CheckCircle, Camera } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2e3192 0%, #0073bd 30%, #00aeef 60%, #53a847 80%, #acc437 100%)",
        }}
      />

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

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-36 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 w-fit max-w-[90%] mx-auto px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
          >
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Award className="w-4 h-4 text-[#acc437] shrink-0" />
              <span className="text-sm sm:text-base font-medium leading-relaxed text-white">
                Licensed &amp; Certified Since 2022 · GMP Compliant
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-4">
              <span className="block">Healthcare Built on</span>
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
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl leading-relaxed text-center text-white/85"
          >
            A licensed pharmaceutical company committed to manufacturing,
            research, and distributing quality medicines across India since 2009.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-col items-center gap-4 w-full"
          >
            <Link href="/products" className="w-full max-w-[320px] sm:max-w-none sm:w-auto">
              <MagneticButton className="group w-full sm:min-w-[220px] h-[64px] px-8 bg-white text-[#2e3192] rounded-2xl font-semibold transition-all hover:shadow-2xl hover:shadow-[#acc437]/30 flex items-center justify-center">
                <span className="flex items-center justify-center gap-2">
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </MagneticButton>
            </Link>

            <div className="w-full max-w-[320px] sm:max-w-none sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const scanButton = document.querySelector('[data-medicine-scan]') as HTMLButtonElement;
                  if (scanButton) scanButton.click();
                }}
                className="w-full h-[64px] px-8 bg-gradient-to-r from-[#0073bd] to-[#53a847] text-white rounded-2xl font-semibold transition-all hover:shadow-2xl hover:shadow-[#53a847]/30 flex items-center justify-center gap-2"
              >
                <Camera className="w-5 h-5" />
                Scan Medicine
              </motion.button>
              <div className="hidden">
                <MedicineScan />
              </div>
            </div>

            <MagneticButton className="group w-full max-w-[320px] sm:max-w-none sm:w-auto sm:min-w-[220px] h-[64px] px-8 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all flex items-center justify-center">
              <Link href="/blog" className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto"
          >
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center justify-center text-center gap-3 p-6 min-h-[180px] bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:border-[#acc437]/60 transition-all cursor-default"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#acc437]" />
                </div>
                <div className="text-white font-bold text-base">{item.value}</div>
                <div className="text-white/70 text-sm leading-tight">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pharma grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-20 w-full max-w-[720px] mx-auto"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "20px",
                padding: "20px 16px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
              }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-9 gap-3 md:gap-4">
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
                    whileHover={{
                      scale: 1.12,
                      rotate: 6,
                      boxShadow: "0 0 18px rgba(172,196,55,0.5)",
                    }}
                    className="aspect-square bg-white/15 rounded-2xl flex flex-col items-center justify-center border border-white/20 hover:border-[#acc437]/60 transition-all cursor-pointer"
                    style={{ padding: "10px 6px" }}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-white text-[11px] font-medium mt-1.5 hidden sm:block leading-tight text-center">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full leading-none">
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
