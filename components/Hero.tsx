// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

const marqueeItems = [
  "10 year warranty",
  "Certified installers",
  "24/7 monitoring",
  "Battery storage",
  "Grid-tied systems",
  "Free site survey",
  "Financing available",
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-green leading-[1.1] tracking-tight">
            Power that doesn&apos;t
            <span className="text-amber"> go out</span> on you.
          </h1>

          <p className="mt-6 text-lg text-green/70 max-w-md">
            Solar power and battery storage for homes and businesses.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-green text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-green-light transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/products"
              className="text-green text-[15px] font-medium px-7 py-3.5 rounded-full border border-green/15 hover:border-green/30 transition-colors"
            >
              View Systems
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-5 lg:-right-5 inset-x-6 sm:inset-x-8 top-8 sm:top-10 rounded-3xl bg-green"
          />
          <div
            aria-hidden
            className="absolute -bottom-3 -left-1 sm:-bottom-4 sm:-left-2 h-16 sm:h-20 w-1.5 rounded-full bg-amber"
          />

          <div className="relative h-[340px] sm:h-[440px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl shadow-green/15 ring-1 ring-black/5">
            <Image
              src="/hero2.jpg"
              alt="Solar panels installed on a residential rooftop"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 left-4 sm:left-6 z-10 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-green/10 ring-1 ring-black/5">
            <div className="text-xl sm:text-2xl font-semibold text-green leading-none">
              100+
            </div>
            <div className="mt-1 text-xs sm:text-sm text-green/60">
              Solars installed
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip — continuous horizontal scroll, Buildcore-style */}
      <div className="relative border-y border-green/10 bg-green/[0.03] py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                size={16}
                className="text-amber"
              />
              <span className="text-sm font-medium text-green/70 whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
