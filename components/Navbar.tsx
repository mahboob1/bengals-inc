"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "Company", href: "/company" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Bengals Inc.
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-black rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
