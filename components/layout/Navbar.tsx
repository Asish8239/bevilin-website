"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false);
        setIsOpen(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/",         label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about",    label: "About" },
    { href: "/blog",     label: "Blog" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[90px] sm:h-[100px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center h-full">
            <Image
              src="/images/logo/bevilin-logo.png"
              alt="Bevilin"
              width={548}
              height={456}
              className="h-[80px] sm:h-[90px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links — center */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors text-sm whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — Get in Touch CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0073bd 0%, #53a847 100%)",
              }}
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen
                ? <X className="w-6 h-6 text-gray-700" />
                : <Menu className="w-6 h-6 text-gray-700" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-3 pb-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #0073bd 0%, #53a847 100%)",
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
