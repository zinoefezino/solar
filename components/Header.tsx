"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  Call02Icon,
} from "@hugeicons/core-free-icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-green">
              Solstice<span className="text-amber">Power</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-green/70 hover:text-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+2340000000000"
              className="flex items-center gap-2 text-green"
            >
              <HugeiconsIcon
                icon={Call02Icon}
                size={22}
                className="text-amber"
              />
              <span className="text-[15px] font-medium">+234 000 000 0000</span>
            </a>
            <Link
              href="/contact"
              className="bg-green text-white text-[15px] font-medium px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            className="lg:hidden text-green"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu01Icon} size={28} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
            <span className="text-xl font-semibold text-green">
              Solstice<span className="text-amber">Power</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-green"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-green py-4 border-b border-black/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 mt-8 flex flex-col gap-4">
            <a
              href="tel:+2340000000000"
              className="flex items-center gap-2 text-green text-lg"
            >
              <HugeiconsIcon
                icon={Call02Icon}
                size={22}
                className="text-amber"
              />
              +234 000 000 0000
            </a>
            <Link
              href="/contact"
              className="bg-green text-white text-center text-[15px] font-medium px-5 py-3.5 rounded-full"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
