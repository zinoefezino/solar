// components/FAQ.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  Remove01Icon,
  CustomerSupportIcon,
} from "@hugeicons/core-free-icons";

const faqs = [
  {
    question: "How long does installation take?",
    answer:
      "Most residential systems are installed within 1 to 3 days, depending on system size and roof complexity. Commercial installs vary based on scope.",
  },
  {
    question: "What happens during a power outage?",
    answer:
      "Your inverter automatically switches to battery power within milliseconds. Most customers don't notice the grid dropped at all.",
  },
  {
    question: "Do you handle permits and paperwork?",
    answer:
      "Yes. Our team manages the full permitting and documentation process as part of every installation.",
  },
  {
    question: "How long do the batteries last?",
    answer:
      "Our standard battery systems are rated for 10+ years of daily cycling, backed by a 10 year warranty on components.",
  },
  {
    question: "Can I monitor my system remotely?",
    answer:
      "Yes. Every install includes access to a monitoring app showing real time production, consumption, and battery levels.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We offer flexible payment plans alongside upfront purchase. Our team can walk you through options during your consultation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left panel */}
          <div className="lg:col-span-2">
            <span className="text-sm font-medium text-amber-dark">FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
              Common questions.
            </h2>
            <p className="mt-4 text-green/70 leading-relaxed max-w-sm">
              Can&apos;t find what you&apos;re looking for? Our team is happy to
              walk you through system sizing, pricing, or installation
              timelines.
            </p>

            <div className="mt-8 rounded-2xl bg-cream p-6 flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-amber/15 flex items-center justify-center shrink-0">
                <HugeiconsIcon
                  icon={CustomerSupportIcon}
                  size={22}
                  className="text-amber-dark"
                />
              </div>
              <div>
                <div className="font-semibold text-green">
                  Still have questions?
                </div>
                <Link
                  href="/contact"
                  className="mt-1 inline-block text-sm font-medium text-amber-dark hover:underline"
                >
                  Talk to our team →
                </Link>
              </div>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-3 divide-y divide-green/10">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-medium text-green">
                      {faq.question}
                    </span>
                    <HugeiconsIcon
                      icon={isOpen ? Remove01Icon : Add01Icon}
                      size={22}
                      className="text-amber-dark shrink-0"
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-green/70 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
