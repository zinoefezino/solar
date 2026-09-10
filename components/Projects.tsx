// components/Projects.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, Location01Icon } from "@hugeicons/core-free-icons";

const projects = [
  {
    title: "Lekki Family Home",
    location: "Lagos, Nigeria",
    image: "/inverter.jpg",
    size: "large",
  },
  {
    title: "Warri Retail Complex",
    location: "Delta, Nigeria",
    image: "/solar.jpg",
    size: "small",
  },
  {
    title: "Port Harcourt Clinic",
    location: "Rivers, Nigeria",
    image: "/install.jpg",
    size: "small",
  },
  {
    title: "Abuja Estate",
    location: "FCT, Nigeria",
    image: "/battery.jpg",
    size: "small",
  },
  {
    title: "Benin Office Park",
    location: "Edo, Nigeria",
    image: "/hero.jpg",
    size: "small",
  },
];

export default function Projects() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-amber-dark">Our Work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
            Recent installations.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden ${
                project.size === "large"
                  ? "col-span-2 row-span-2 h-72 lg:h-[420px]"
                  : "h-40 lg:h-[200px]"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green/85 via-green/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm lg:text-base">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    size={14}
                    className="text-amber"
                  />
                  <span className="text-white/80 text-xs">
                    {project.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-green text-[15px] font-medium px-7 py-3.5 rounded-full border border-green/15 hover:border-green/30 hover:bg-green/[0.03] transition-colors"
          >
            View more
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              size={18}
              className="text-amber"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}