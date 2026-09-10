import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageBanner from "@/components/PageBanner";
import DetailFeatures from "@/components/DetailFeatures";
import {
  BatteriesEnergyIcon,
  FlashIcon,
  ShieldEnergyIcon,
  EnergyIcon,
  Home01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Batteries | SolsticePower",
  description:
    "Long cycle battery storage for homes and businesses that need reliable backup through outages.",
};

const features = [
  {
    icon: BatteriesEnergyIcon,
    title: "Long cycle life",
    body: "Rated for years of daily charge and discharge with a 10 year warranty path.",
  },
  {
    icon: FlashIcon,
    title: "Instant backup",
    body: "Keeps essentials or whole home loads running the moment the grid fails.",
  },
  {
    icon: EnergyIcon,
    title: "Scalable banks",
    body: "Start with what you need today and expand capacity as your usage grows.",
  },
  {
    icon: Home01Icon,
    title: "Home and business",
    body: "Sized for apartments, family homes, shops, clinics, and offices alike.",
  },
  {
    icon: ShieldEnergyIcon,
    title: "Safe chemistry",
    body: "Modern lithium systems with battery management that protects every cell.",
  },
  {
    icon: CheckmarkCircle02Icon,
    title: "Clean install",
    body: "Compact footprints and tidy wiring that fit utility rooms and plant areas.",
  },
];

export default function BatteriesPage() {
  return (
    <SiteShell>
      <PageBanner
        eyebrow="Batteries"
        title="Power that lasts past sundown."
        description="Reliable storage so outages become a non event for your home or business."
        image="/battery.jpg"
        imageAlt="Solar battery storage system"
      />
      <DetailFeatures
        eyebrow="Why our batteries"
        heading="Storage you can count on every evening."
        intro="We specify battery banks for cycle life, safety, and the loads that matter most to you."
        features={features}
      />
    </SiteShell>
  );
}
