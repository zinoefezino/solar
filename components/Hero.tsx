// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon, StarIcon } from "@hugeicons/core-free-icons";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* <div className="inline-flex items-center gap-2 bg-amber/10 text-amber-dark text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <HugeiconsIcon icon={StarIcon} size={16} />
            Trusted by 1,200+ homes &amp; businesses
          </div> */}

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

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {[
              "10 year warranty",
              "Certified installers",
              "24/7 monitoring",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={18}
                  className="text-amber"
                />
                <span className="text-sm text-green/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Offset plate behind the photo */}
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-5 lg:-right-5 inset-x-6 sm:inset-x-8 top-8 sm:top-10 rounded-3xl bg-green"
          />
          {/* Thin amber accent along the plate edge */}
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

          {/* Floating stat chip */}
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
    </section>
  );
}
