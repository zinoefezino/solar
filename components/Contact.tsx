// components/Contact.tsx
"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Mail01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";

type ContactProps = {
  hideIntro?: boolean;
};

export default function Contact({ hideIntro = false }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <span className="text-sm font-medium text-amber-dark">
              {hideIntro ? "Send a message" : "Get Started"}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-green tracking-tight">
              {hideIntro
                ? "Request a free quote."
                : "Ready for power you can count on?"}
            </h2>
            <p className="mt-4 text-green/70 text-lg max-w-md">
              {hideIntro
                ? "Share a few details and we will follow up with sizing options and next steps."
                : "Tell us a bit about your home or business and we will get back with a free, no obligation quote."}
            </p>

            <div className="mt-10 space-y-4">
              <a href="tel:+2340000000000" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10">
                  <HugeiconsIcon icon={Call02Icon} size={18} className="text-amber-dark" />
                </div>
                <span className="text-green text-[15px] group-hover:text-green-light transition-colors">
                  +234 000 000 0000
                </span>
              </a>
              <a href="mailto:hello@solsticepower.com" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10">
                  <HugeiconsIcon icon={Mail01Icon} size={18} className="text-amber-dark" />
                </div>
                <span className="text-green text-[15px] group-hover:text-green-light transition-colors">
                  hello@solsticepower.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10">
                  <HugeiconsIcon icon={Location01Icon} size={18} className="text-amber-dark" />
                </div>
                <span className="text-green text-[15px]">
                  Warri, Delta State, Nigeria
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3rdl p-7 sm:p-8 lg:p-9 ring-1 ring-green/10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <h3 className="text-xl font-semibold text-green">
                  Thanks. We will be in touch shortly.
                </h3>
                <p className="mt-2 text-sm text-green/60">
                  A member of our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-green">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="mt-1.5 w-full rounded-xl border border-green/15 px-4 py-3 text-green placeholder:text-green/30 focus:ostline-none focus:border-green/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green">Phone</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="mt-1.5 w-full rounded-xl border border-green/15 px-4 py-3 text-green placeholder:text-green/30 focus:ostline-none focus:border-green/40"
                      placeholder="+234"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-green">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1.5 w-full rounded-xl border border-green/15 px-4 py-3 text-green placeholder:text-green/30 focus:outline-none focus:border-green/40"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-green">
                    What are you interested in?
                  </label>
                  <select
                    name="interest"
                    className="mt-1.5 w-full rounded-xl border border-green/15 px-4 py-3 text-green focus:outline-none focus:border-green/40"
                  >
                    <option>Residential system</option>
                    <option>Commercial system</option>
                    <option>Maintenance / repair</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-green">Message</label>
                  <textarea
                    rows={3}
                    name="message"
                    className="mt-1.5 w-full rounded-xl border border-green/15 px-4 py-3 text-green placeholder:text-green/30 focus:outline-none focus:border-green/40 resize-none"
                    placeholder="Tell us about your space and energy needs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green text-white font-medium py-3.5 rounded-full hover:bg-green-light transition-colors"
                >
                  Request a Free Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
