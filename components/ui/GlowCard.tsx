"use client";

import { useRef, MouseEvent, useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.03, 
        y: -8,
        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden ${className}`}
    >
      {isHovered && (
        <div
          className="absolute w-96 h-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
          style={{
            left: glowPosition.x,
            top: glowPosition.y,
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
