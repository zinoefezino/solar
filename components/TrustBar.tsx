import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  Calendar03Icon,
  ThumbsUpIcon,
  CustomerSupportIcon,
} from "@hugeicons/core-free-icons";

const stats = [
  {
    icon: Home01Icon,
    value: "1,200+",
    label: "Systems Installed",
  },
  {
    icon: Calendar03Icon,
    value: "12 yrs",
    label: "In Business",
  },
  {
    icon: ThumbsUpIcon,
    value: "98%",
    label: "Customer Satisfaction",
  },
  {
    icon: CustomerSupportIcon,
    value: "24/7",
    label: "Monitoring & Support",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-green">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber/15">
                <HugeiconsIcon
                  icon={stat.icon}
                  size={22}
                  className="text-amber"
                />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-amber">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/65">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}