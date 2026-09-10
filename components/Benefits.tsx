import { HugeiconsIcon } from "@hugeicons/react";
import {
  Coins01Icon,
  FlashIcon,
  Leaf01Icon,
  ShieldEnergyIcon,
} from "@hugeicons/core-free-icons";

const benefits = [
  {
    icon: Coins01Icon,
    title: "Lower Bills",
    description:
      "Cut your monthly electricity costs by generating and storing your own power.",
  },
  {
    icon: FlashIcon,
    title: "Backup Power",
    description:
      "Stay powered through grid outages with battery reserves that kick in automatically.",
  },
  {
    icon: Leaf01Icon,
    title: "Cleaner Energy",
    description:
      "Reduce your carbon footprint with a renewable source that runs quietly, year round.",
  },
  {
    icon: ShieldEnergyIcon,
    title: "Long Term Reliability",
    description:
      "Certified components and a 10 year warranty mean fewer surprises down the line.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-amber-dark">Why Solar</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
            Built for savings and peace of mind.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center">
                <HugeiconsIcon
                  icon={benefit.icon}
                  size={24}
                  className="text-amber-dark"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-green">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-green/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
