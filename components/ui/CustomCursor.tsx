"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if mobile/touch device
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Smooth animation loop
    const animate = () => {
      // Lerp (linear interpolation) for smooth following
      const lerpFactor = 0.15;
      const ringLerpFactor = 0.08;

      // Update dot position (faster)
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * lerpFactor;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * lerpFactor;

      // Update ring position (slower for trailing effect)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerpFactor;

      // Apply transforms
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${
          isHovering ? 1.5 : 1
        })`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile, isHovering]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1478B4 0%, #53A847 50%, #ACC437 100%)",
          marginLeft: "-3px",
          marginTop: "-3px",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          border: "2px solid transparent",
          backgroundImage:
            "linear-gradient(white, white), linear-gradient(135deg, #1478B4 0%, #53A847 50%, #ACC437 100%)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          marginLeft: "-12px",
          marginTop: "-12px",
          opacity: 0.6,
          transition: "transform 0.2s ease, opacity 0.3s ease",
        }}
      />

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
