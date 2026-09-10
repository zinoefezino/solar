import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Award01Icon,
  Leaf01Icon,
  ShieldEnergyIcon,
  UserIcon,
  ArrowRight02Icon,
  FlashIcon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "About | SolsticePower",
  description:
    "Learn about SolsticePower, our mission, values, and years delivering solar and inverter systems across Nigeria.",
};

const stats = [
  { label: "Years in the field", value: "8+" },
  { label: "Systems installed", value: "1,200+" },
  { label: "Cities served", value: "25+" },
  { label: "Warranty support", value: "10 year" },
];

const values = [
  {
    icon: ShieldEnergyIcon,
    title: "Reliability first",
    body: "We specify components we would put on our own roofs, then stand behind the work.",
  },
  {
    icon: Leaf01Icon,
    title: "Practical sustainability",
    body: "Cleaner power should also mean lower bills and fewer generator hours.",
  },
  {
    icon: UserIcon,
    title: "Clear communication",
    body: "No jargon walls. You always know what we recommend and why it fits.",
  },
  {
    icon: Award01Icon,
    title: "Craftsmanship",
    body: "Neat cabling, solid mounts, and a handover you can understand on day one.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-green">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
          <span className="text-sm font-medium text-amber">About</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-3xl">
            Power you can plan your day around.
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            SolsticePower designs and installs solar and inverter systems for
            Nigerian homes and businesses that are done waiting on the grid.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white ring-1 ring-green/10 p-6 text-center"
              >
                <p className="text-3xl font-semibold text-green">{stat.value}</p>
                <p className="mt-2 text-sm text-green/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-sm font-medium text-amber-dark">Our story</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-green tracking-tight">
                Born from too many generator nights.
              </h2>
              <p className="mt-4 text-green/70 leading-relaxed">
                We started SolsticePower after watching families and shop owners
                burn fuel just to keep the lights on. Our goal is simple: right
                sized solar and storage that feels ordinary, not experimental.
              </p>
              <p className="mt-4 text-green/70 leading-relaxed">
                Today our teams survey sites, install systems, and stay available
                for maintenance across major cities in Nigeria. Every project is
                sized from real usage data, not guesswork.
              </p>
              <div className="mt-6 flex items-center gap-3 text-green">
                <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
                  <HugeiconsIcon icon={FlashIcon} size={20} className="text-amber-dark" />
                </div>
                <p className="text-sm font-medium">
                  Residential and commercial, one trusted partner.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl ring-1 ring-green/10 p-5 bg-cream/40"
                >
                  <HugeiconsIcon
                    icon={value.icon}
                    size={22}
                    className="text-amber-dark"
                  />
                  <h3 className="mt-4 text-base font-semibold text-green">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-green/70 leading-relaxed">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-3xl bg-green p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">
                Ready to talk through your site?
              </h2>
              <p className="mt-2 text-white/70 max-w-xl">
                Book a free consultation. We will map loads, roof space, and a
                package that fits.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber text-green text-[15px] font-semibold px-6 py-3.5 rounded-full hover:bg-amber-dark transition-colors shrink-0"
            >
              Get a Free Quote
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
