// components/Testimonial.tsx
"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteUpIcon, StarIcon } from "@hugeicons/core-free-icons";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Homeowner",
    location: "Lekki, Lagos",
    quote:
      "Fuel runs used to eat into our week. Since the install, the generator barely comes on, and our NEPA bill dropped enough that we noticed the first month.",
  },
  {
    name: "Emeka Tobi",
    role: "Shop owner",
    location: "Warri, Delta",
    quote:
      "Outages used to empty my shop. The battery takes over before customers even look up. Best decision I made for the business this year.",
  },
  {
    name: "Funmi Adeyemi",
    role: "Clinic admin",
    location: "Port Harcourt, Rivers",
    quote:
      "They sized the system, handled the paperwork, and had us running in days, not weeks. Quiet, steady power. That is all we needed.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-amber-dark">
            Customer Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
            What our customers say.
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="rounded-3xl bg-white p-8 sm:p-10 lg:p-14 ring-1 ring-green/10">
            <div className="flex items-start justify-between gap-6">
              <HugeiconsIcon
                icon={QuoteUpIcon}
                size={40}
                className="text-amber shrink-0"
              />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HugeiconsIcon
                    key={i}
                    icon={StarIcon}
                    size={18}
                    className="text-amber"
                  />
                ))}
              </div>
            </div>

            <p className="mt-8 text-xl sm:text-2xl lg:text-[1.7rem] text-green leading-snug font-medium max-w-3xl">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green text-amber flex items-center justify-center text-sm font-semibold">
                  {current.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-green">{current.name}</div>
                  <div className="text-sm text-green/60">
                    {current.role} · {current.location}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setActive(i)}
                    aria-label={`Show testimonial from ${t.name}`}
                    className={`h-2 rounded-full transition-all ${
                      i === active
                        ? "w-9 bg-amber"
                        : "w-2.5 bg-green/15 hover:bg-green/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}