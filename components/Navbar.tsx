"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`sticky top-0 z-50 backdrop-blur-md transition-all ${
        scrolled ? "border-b bg-white/80 shadow-sm" : "bg-white/60"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-lg font-semibold tracking-tight">
          Bengals Inc.
        </span>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a className="hover:text-black transition" href="/solutions">
            Solutions
          </a>
          <a className="hover:text-black transition" href="/technology">
            Technology
          </a>
          <a className="hover:text-black transition" href="/company">
            Company
          </a>
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className="ml-4 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium hover:bg-black hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}
