import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  Home02Icon,
  Building02Icon,
  Tick02Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";

const packages = [
  {
    name: "Home Starter",
    icon: Home01Icon,
    description:
      "A compact system for apartments and small homes that need lights, fans, and essentials covered.",
    price: "From ₦1,850,000",
    highlight: false,
    includes: [
      "3 to 5 kW solar array",
      "Hybrid inverter",
      "Battery backup for essentials",
      "Professional installation",
    ],
  },
  {
    name: "Home Plus",
    icon: Home02Icon,
    description:
      "Full home coverage with stronger storage so you stay powered through longer outages.",
    price: "From ₦3,450,000",
    highlight: true,
    includes: [
      "5 to 8 kW solar array",
      "Smart hybrid inverter",
      "Extended battery bank",
      "Monitoring app and support",
    ],
  },
  {
    name: "Business",
    icon: Building02Icon,
    description:
      "Scaled systems for shops, offices, and clinics that cannot afford downtime.",
    price: "From ₦7,500,000",
    highlight: false,
    includes: [
      "Custom commercial sizing",
      "Three phase ready options",
      "Priority maintenance plan",
      "On site training for staff",
    ],
  },
];

export default function Packages() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-amber-dark">Packages</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
            Clear starting points for every budget.
          </h2>
          <p className="mt-4 text-green/70 text-lg">
            Final pricing depends on your site survey. These packages give you a
            sense of scope before your free consultation.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl p-7 lg:p-8 ring-1 transition-shadow hover:shadow-lg ${
                pkg.highlight
                  ? "bg-green text-white ring-green shadow-md"
                  : "bg-white text-green ring-green/10"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-7 bg-amber text-green text-xs font-semibold px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  pkg.highlight ? "bg-white/10" : "bg-amber/10"
                }`}
              >
                <HugeiconsIcon
                  icon={pkg.icon}
                  size={24}
                  className={pkg.highlight ? "text-amber" : "text-amber-dark"}
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{pkg.name}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  pkg.highlight ? "text-white/75" : "text-green/70"
                }`}
              >
                {pkg.description}
              </p>
              <p
                className={`mt-5 text-2xl font-semibold ${
                  pkg.highlight ? "text-amber" : "text-green"
                }`}
              >
                {pkg.price}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={18}
                      className={`shrink-0 mt-0.5 ${
                        pkg.highlight ? "text-amber" : "text-green-light"
                      }`}
                    />
                    <span
                      className={
                        pkg.highlight ? "text-white/85" : "text-green/80"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 text-[15px] font-medium px-5 py-3 rounded-full transition-colors ${
                  pkg.highlight
                    ? "bg-amber text-green hover:bg-amber-dark"
                    : "bg-green text-white hover:bg-green-light"
                }`}
              >
                Request a quote
                <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
