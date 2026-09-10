
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const products = [
  {
    title: "Solar Panels",
    description:
      "High efficiency panels built to perform in full sun and low light alike.",
    image: "/solar.jpg",
    href: "/products/panels",
  },
  {
    title: "Inverters",
    description:
      "Smart hybrid inverters that switch seamlessly between grid, battery, and solar.",
    image: "/inverter.jpg",
    href: "/products/inverters",
  },
  {
    title: "Batteries",
    description:
      "Long cycle storage that keeps your home powered well after sundown.",
    image: "/battery.jpg",
    href: "/products/batteries",
  },
  {
    title: "Installation",
    description:
      "Certified installers handle design, permits, and setup start to finish.",
    image: "/install.jpg",
    href: "/services/installation",
  },
];

export default function Products() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-amber-dark">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
            Everything you need, in one system.
          </h2>
          <p className="mt-4 text-green/70 text-lg">
            From panels to power management, we design and install systems that
            work together, not a pile of mismatched parts.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group relative block h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green/90 via-green/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-semibold text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {product.description}
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
  );
}
