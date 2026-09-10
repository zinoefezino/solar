import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Projects | SolsticePower",
  description:
    "Browse SolsticePower solar and inverter installations across Lagos, Abuja, Port Harcourt, and more of Nigeria.",
};

const projects = [
  {
    title: "Lekki Family Home",
    location: "Lagos, Nigeria",
    type: "Residential",
    image: "/inverter.jpg",
  },
  {
    title: "Warri Retail Complex",
    location: "Delta, Nigeria",
    type: "Commercial",
    image: "/solar.jpg",
  },
  {
    title: "Port Harcourt Clinic",
    location: "Rivers, Nigeria",
    type: "Healthcare",
    image: "/install.jpg",
  },
  {
    title: "Abuja Estate",
    location: "FCT, Nigeria",
    type: "Residential",
    image: "/battery.jpg",
  },
  {
    title: "Benin Office Park",
    location: "Edo, Nigeria",
    type: "Commercial",
    image: "/hero.jpg",
  },
  {
    title: "Ikeja Duplex",
    location: "Lagos, Nigeria",
    type: "Residential",
    image: "/hero2.jpg",
  },
  {
    title: "Enugu Guest House",
    location: "Enugu, Nigeria",
    type: "Hospitality",
    image: "/solar.jpg",
  },
  {
    title: "Ibadan Warehouse",
    location: "Oyo, Nigeria",
    type: "Industrial",
    image: "/install.jpg",
  },
  {
    title: "Asaba Townhouse",
    location: "Delta, Nigeria",
    type: "Residential",
    image: "/battery.jpg",
  },
  {
    title: "Calabar School Block",
    location: "Cross River, Nigeria",
    type: "Education",
    image: "/inverter.jpg",
  },
  {
    title: "Kaduna Workshop",
    location: "Kaduna, Nigeria",
    type: "Industrial",
    image: "/hero.jpg",
  },
  {
    title: "Victoria Island Suite",
    location: "Lagos, Nigeria",
    type: "Residential",
    image: "/hero2.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="bg-green">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
          <span className="text-sm font-medium text-amber">Projects</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-3xl">
            Installations across Nigeria.
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Homes, clinics, shops, and offices running on systems we designed
            and commissioned.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl overflow-hidden ring-1 ring-green/10 bg-cream/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-green text-xs font-semibold px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-green">
                    {project.title}
                  </h2>
                  <div className="mt-2 flex items-center gap-1.5">
                    <HugeiconsIcon
                      icon={Location01Icon}
                      size={16}
                      className="text-amber-dark"
                    />
                    <span className="text-sm text-green/65">
                      {project.location}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-cream p-8 lg:p-10 text-center">
            <h2 className="text-2xl font-semibold text-green tracking-tight">
              Want results like these on your roof?
            </h2>
            <p className="mt-3 text-green/70 max-w-xl mx-auto">
              Tell us about your site. We will recommend a package and timeline
              with no obligation.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-green text-white text-[15px] font-medium px-6 py-3.5 rounded-full hover:bg-green-light transition-colors"
            >
              Get a Free Quote
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} className="text-amber" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
