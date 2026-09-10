import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Products | SolsticePower",
  description:
    "Explore SolsticePower solar panels, inverters, batteries, and installation services for homes and businesses in Nigeria.",
};

const items = [
  {
    title: "Solar Panels",
    description:
      "High efficiency modules built for strong output in Nigerian sun and reliable performance in low light.",
    image: "/solar.jpg",
    href: "/products/panels",
  },
  {
    title: "Inverters",
    description:
      "Smart hybrid inverters that move smoothly between solar, battery, and grid power.",
    image: "/inverter.jpg",
    href: "/products/inverters",
  },
  {
    title: "Batteries",
    description:
      "Long cycle storage that keeps lights, appliances, and work running after sundown.",
    image: "/battery.jpg",
    href: "/products/batteries",
  },
  {
    title: "Installation",
    description:
      "Certified crews handle design, mounting, wiring, and handover from start to finish.",
    image: "/install.jpg",
    href: "/services/installation",
  },
];

export default function ProductsPage() {
  return (
    <SiteShell>
      <section className="bg-green">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
          <span className="text-sm font-medium text-amber">Products</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-3xl">
            Components that work as one system.
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Panels, inverters, batteries, and professional installation sized
            for Nigerian homes and businesses.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative block h-80 sm:h-96 rounded-3xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green/90 via-green/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber">
                    Learn more
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
