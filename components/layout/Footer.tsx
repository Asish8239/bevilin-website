"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Matches ProductCategories exactly
  const categories = [
    { href: "/products?category=tablets", label: "Tablets & Capsules" },
    { href: "/products?category=cardiac", label: "Cardiac Care" },
    { href: "/products?category=general", label: "General Medicine" },
    { href: "/products?category=diabetes", label: "Diabetes Care" },
    { href: "/products?category=pain-relief", label: "Pain Relief" },
    { href: "/products?category=vitamins", label: "Vitamins & Supplements" },
  ];

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo/logo.png" alt="Bevilin" width={40} height={40} />
              <span className="text-xl font-bold" style={{ color: "#acc437" }}>
                Bevilin
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Bevilin Pharma Private Limited
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">
              156/40/2, 1st Cross, Muthurayaswamy Layout,
              <br />
              Bangalore, Karnataka – 560076
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors"
                  style={{ color: "#9ca3af" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0073bd")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#1f2937")}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-5">Categories</h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — from real documents */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#acc437" }} />
                <div className="text-sm text-gray-400">
                  <p>+91 94908 99922</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#acc437" }} />
                <div className="text-sm text-gray-400">
                  <p>info@bevilin.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#acc437" }} />
                <p className="text-sm text-gray-400">
                  156/40/2, 1st Cross,
                  <br />
                  Muthurayaswamy Layout,
                  <br />
                  Bangalore, Karnataka – 560076
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Bevilin Pharma Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <Link key={label} href="#" className="text-gray-500 hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
