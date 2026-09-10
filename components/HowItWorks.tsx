// components/HowItWorks.tsx
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  ToolsIcon,
  ChartLineData02Icon,
} from "@hugeicons/core-free-icons";

const steps = [
  {
    number: "01",
    icon: Calendar03Icon,
    title: "Consultation",
    description:
      "We assess your energy usage and roof/site conditions to design a system sized right for you.",
  },
  {
    number: "02",
    icon: ToolsIcon,
    title: "Installation",
    description:
      "Certified installers handle permits, mounting, wiring, and setup, usually complete in 1 to 3 days.",
  },
  {
    number: "03",
    icon: ChartLineData02Icon,
    title: "Monitoring",
    description:
      "Track production and battery levels in real time, with support on call whenever you need it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-amber-dark">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
            From first call to full power, in three steps.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-10 sm:gap-8 relative">
          {/* connecting line, desktop only */}
          <div className="hidden sm:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-green/15" />

          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="w-12 h-12 rounded-full bg-green flex items-center justify-center relative z-10">
                <HugeiconsIcon
                  icon={step.icon}
                  size={22}
                  className="text-white"
                />
              </div>
              <span className="block mt-5 text-sm font-medium text-amber-dark">
                {step.number}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-green">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-green/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
