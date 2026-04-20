"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/",        label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about",   label: "About Us" },
    { href: "/blog",    label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const categories = [
    { href: "/products?category=neuropsychiatry",  label: "Neuropsychiatry" },
    { href: "/products?category=cardiovascular",   label: "Cardiovascular Diseases" },
    { href: "/products?category=gastroenterology", label: "Gastroenterology" },
    { href: "/products?category=pain-surgery",     label: "Pain and Surgery" },
    { href: "/products?category=ophthalmology",    label: "Ophthalmology" },
    { href: "/products?category=respiratory",      label: "Respiratory" },
    { href: "/products?category=gynaecology",      label: "Gynaecology" },
    { href: "/products?category=urology",          label: "Urology" },
    { href: "/products?category=oncology",         label: "Oncology" },
    { href: "/products?category=dermatology",      label: "Dermatology" },
    { href: "/products?category=anti-infectives",  label: "Anti-infectives" },
    { href: "/products?category=nephrology",       label: "Nephrology" },
    { href: "/products?category=consumer-health",  label: "Consumer Health Care" },
  ];

  const socials = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1CRbPJBuLg/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/bevilin_pharma?igsh=d3UxOXltaDVtaTh3&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="relative h-[75px] w-[280px] mb-4">
              <Image
                src="/images/logo/bevilin-logo.png"
                alt="Bevilin"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Bevilin Pharma Private Limited
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">
              156/40/2, 1st Cross, Muthurayaswamy Layout,
              <br />
              Bangalore, Karnataka – 560076
            </p>
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
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

          {/* Therapeutic Areas */}
          <div>
            <h3 className="text-white font-semibold mb-5">Therapeutic Areas</h3>
            <ul className="space-y-2">
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

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-400" />
                <p className="text-sm text-gray-400">+91 94908 99922</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-400" />
                <p className="text-sm text-gray-400">info@bevilin.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-400" />
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
              <Link
                key={label}
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
