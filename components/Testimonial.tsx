// components/Testimonial.tsx
import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteUpIcon, StarIcon } from "@hugeicons/core-free-icons";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Homeowner",
    location: "Lekki, Lagos",
    quote:
      "Fuel runs used to eat into our week. Since the install, the generator barely comes on, and our NEPA bill dropped enough that we noticed the first month.",
    featured: true,
  },
  {
    name: "Emeka Tobi",
    role: "Shop owner",
    location: "Warri, Delta",
    quote:
      "Outages used to empty my shop. The battery takes over before customers even look up.",
  },
  {
    name: "Funmi Adeyemi",
    role: "Clinic admin",
    location: "Port Harcourt, Rivers",
    quote:
      "They sized the system, handled the paperwork, and had us running in days, not weeks.",
  },
];

function Avatar({ name }: { name: string }) {
  return (
    <div className="h-11 w-11 rounded-full bg-green text-amber flex items-center justify-center text-sm font-semibold shrink-0">
      {name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")}
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <HugeiconsIcon
          key={i}
          icon={StarIcon}
          size={14}
          className="text-amber"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-amber-dark">
            Customer Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
            What our customers say.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Featured large card */}
          <div className="lg:col-span-3 rounded-3xl bg-green p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <HugeiconsIcon
                icon={QuoteUpIcon}
                size={36}
                className="text-amber"
              />
              <p className="mt-6 text-xl sm:text-2xl text-white leading-snug font-medium">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <Avatar name={featured.name} />
              <div>
                <div className="font-semibold text-white">{featured.name}</div>
                <div className="text-sm text-white/60">
                  {featured.role} · {featured.location}
                </div>
              </div>
            </div>
          </div>

          {/* Two stacked smaller cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((t) => (
              <div
                key={t.name}
                className="flex-1 rounded-3xl bg-white p-6 sm:p-7 ring-1 ring-green/10 flex flex-col justify-between"
              >
                <div>
                  <Stars />
                  <p className="mt-4 text-green/80 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar name={t.name} />
                  <div>
                    <div className="text-sm font-semibold text-green">
                      {t.name}
                    </div>
                    <div className="text-xs text-green/50">
                      {t.role} · {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
