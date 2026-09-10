"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  Message01Icon,
  FlashIcon,
} from "@hugeicons/core-free-icons";

const highlights = [
  {
    icon: Message01Icon,
    title: "Free consultation",
    body: "No pressure walkthrough of your space and energy needs.",
  },
  {
    icon: FlashIcon,
    title: "Fast response",
    body: "We typically reply within one business day.",
  },
  {
    icon: Clock01Icon,
    title: "Hours",
    body: "Mon to Sat, 8:00am to 6:00pm WAT",
  },
];

export default function ContactHero() {
  return (
    <section className="bg-green">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
        <span className="text-sm font-medium text-amber">Contact</span>
        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-2xl">
          Let&apos;s size the right system for you.
        </h1>
        <p className="mt-4 text-white/70 text-lg max-w-xl">
          Send a message or call us. We&apos;ll help with residential,
          commercial, and maintenance requests across Nigeria.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/15">
                <HugeiconsIcon
                  icon={item.icon}
                  size={20}
                  className="text-amber"
                />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-white/65 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
