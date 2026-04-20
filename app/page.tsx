"use client";

import { motion } from "framer-motion";

import HeroUpgraded from "@/components/home/HeroUpgraded";
import StatsCounter from "@/components/home/StatsCounter";
import ProductCategories from "@/components/home/ProductCategories";
import Features from "@/components/home/Features";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ResearchDevelopment from "@/components/home/ResearchDevelopment";
import Timeline from "@/components/home/Timeline";
import Milestones from "@/components/home/Milestones";
import Trademarks from "@/components/home/Trademarks";
import DoctorTrust from "@/components/home/DoctorTrust";
import Certifications from "@/components/home/Certifications";
import ComplianceSafety from "@/components/home/ComplianceSafety";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <motion.div
      className="gpu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroUpgraded />

      <ScrollReveal>
        <StatsCounter />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ProductCategories />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Features />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FeaturedProducts />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ResearchDevelopment />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Timeline />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Milestones />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Trademarks />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <DoctorTrust />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Certifications />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ComplianceSafety />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <BlogPreview />
      </ScrollReveal>
    </motion.div>
  );
}
