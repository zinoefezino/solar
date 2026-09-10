import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

type Feature = {
  // Hugeicons icon object from @hugeicons/core-free-icons
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  body: string;
};

type DetailFeaturesProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  features: Feature[];
  ctaLabel?: string;
};

export default function DetailFeatures({
  eyebrow,
  heading,
  intro,
  features,
  ctaLabel = "Get a Free Quote",
}: DetailFeaturesProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-amber-dark">{eyebrow}</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-green tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 text-green/70 text-lg leading-relaxed">{intro}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl ring-1 ring-green/10 bg-cream/60 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center">
                <HugeiconsIcon
                  icon={feature.icon}
                  size={24}
                  className="text-amber-dark"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-green">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-green/70 leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green text-white text-[15px] font-medium px-6 py-3.5 rounded-full hover:bg-green-light transition-colors"
          >
            {ctaLabel}
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} className="text-amber" />
          </Link>
        </div>
      </div>
    </section>
  );
}
