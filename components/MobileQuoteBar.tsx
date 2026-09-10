"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon } from "@hugeicons/core-free-icons";

export default function MobileQuoteBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-white/10 bg-green">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href="tel:+2340000000000"
          className="flex items-center gap-2 text-white text-sm font-medium"
          aria-label="Call SolsticePower"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <HugeiconsIcon icon={Call02Icon} size={20} className="text-amber" />
          </span>
          <span>Call</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 max-w-xs text-center bg-amber text-green text-sm font-semibold px-5 py-3 rounded-full hover:bg-amber-dark transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}