// components/Footer.tsx
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  Facebook01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "Solar Panels", href: "/products/panels" },
    { label: "Inverters", href: "/products/inverters" },
    { label: "Batteries", href: "/products/batteries" },
  ],
  Support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Installation", href: "/services/installation" },
    { label: "Maintenance", href: "/services/maintenance" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-green/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-xl font-semibold text-green">
              Solstice<span className="text-amber">Power</span>
            </span>
            <p className="mt-3 text-sm text-green/60 max-w-xs">
              Solar and inverter systems designed for reliable, everyday power.
            </p>
            <div className="mt-5 flex gap-4">
              <HugeiconsIcon
                icon={InstagramIcon}
                size={20}
                className="text-green/50 hover:text-green cursor-pointer transition-colors"
              />
              <HugeiconsIcon
                icon={Facebook01Icon}
                size={20}
                className="text-green/50 hover:text-green cursor-pointer transition-colors"
              />
              <HugeiconsIcon
                icon={NewTwitterIcon}
                size={20}
                className="text-green/50 hover:text-green cursor-pointer transition-colors"
              />
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-green">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-green/60 hover:text-green transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-green/10 flex flex-col sm:flex-row justify-between gap-4">
          <span className="text-sm text-green/50">
            © {new Date().getFullYear()} SolsticePower. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-green/50 hover:text-green transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-green/50 hover:text-green transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
