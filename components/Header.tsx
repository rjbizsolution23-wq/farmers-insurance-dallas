"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Auto Insurance", href: "/auto-insurance-dallas" },
  { name: "Home Insurance", href: "/home-insurance-dallas" },
  { name: "Business Insurance", href: "/business-insurance-dallas" },
  { name: "Life Insurance", href: "/life-insurance-dallas" },
  { name: "Get Quote", href: "/#quote" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/20">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow border-2 border-primary-200">
              <img 
                src="/christopher-evans-headshot.jpg" 
                alt="Christopher Evans" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-neutral-900 leading-tight">Christopher Evans</div>
              <div className="text-sm text-neutral-600">Farmers Insurance Agent</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:4694418906"
              className="hidden md:flex items-center gap-2 btn-primary"
            >
              <FaPhone className="animate-pulse" />
              <span>(469) 441-8906</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6 text-neutral-700" />
              ) : (
                <FaBars className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="tel:4694418906"
                  className="flex items-center justify-center gap-2 mt-4 btn-primary w-full"
                >
                  <FaPhone />
                  <span>(469) 441-8906</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
