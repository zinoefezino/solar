import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ToolsIcon,
  Settings01Icon,
  CustomerService01Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Services | SolsticePower",
  description:
    "Installation, maintenance, and consultation services from SolsticePower across Nigeria.",
};

const services = [
  {
    icon: ToolsIcon,
    title: "Installation",
    body: "Design, permits, mounting, wiring, and commissioning handled by certified crews.",
    href: "/services/installation",
  },
  {
    icon: Settings01Icon,
    title: "Maintenance",
    body: "Scheduled checks, cleaning, firmware updates, and fast response when something needs attention.",
    href: "/services/maintenance",
  },
  {
    icon: CustomerService01Icon,
    title: "Consultation",
    body: "A no obligation site assessment that sizes the right system for your usage and budget.",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="bg-green">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
          <span className="text-sm font-medium text-amber">Services</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-3xl">
            From first survey to long term care.
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Installation, maintenance, and expert advice so your system stays
            productive for years.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl ring-1 ring-green/10 bg-cream/50 p-7 hover:shadow-lg hover:ring-green/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center">
                  <HugeiconsIcon
                    icon={service.icon}
                    size={24}
                    className="text-amber-dark"
                  />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-green">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-green/70 leading-relaxed">
                  {service.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-amber-dark">
                  Learn more
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
