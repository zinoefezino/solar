"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, ArrowLeft02Icon } from "@hugeicons/core-free-icons";

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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollerRef.current?.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-amber-dark">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
              Everything you need, in one system.
            </h2>
            <p className="mt-4 text-green/70 text-lg">
              From panels to power management, we design and install systems
              that work together, not a pile of mismatched parts.
            </p>
          </div>

          {/* Desktop scroll controls */}
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-green/15 text-green hover:border-green/30 transition-colors"
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-green/15 text-green hover:border-green/30 transition-colors"
            >
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal swipe row */}
        <div
          ref={scrollerRef}
          className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group relative block h-96 w-[78%] sm:w-[46%] lg:w-[27%] shrink-0 snap-start rounded-2xl overflow-hidden"
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
