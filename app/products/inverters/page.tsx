import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageBanner from "@/components/PageBanner";
import DetailFeatures from "@/components/DetailFeatures";
import {
  FlashIcon,
  SmartPhone01Icon,
  ShieldEnergyIcon,
  EnergyIcon,
  Settings01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Inverters | SolsticePower",
  description:
    "Smart hybrid inverters that switch between solar, battery, and grid power without interruption.",
};

const features = [
  {
    icon: FlashIcon,
    title: "Seamless switchover",
    body: "Moves to battery within milliseconds when the grid drops so lights stay on.",
  },
  {
    icon: EnergyIcon,
    title: "Hybrid ready",
    body: "Manages solar, battery, and grid inputs so every watt is used wisely.",
  },
  {
    icon: SmartPhone01Icon,
    title: "App monitoring",
    body: "See production, loads, and battery levels from your phone in real time.",
  },
  {
    icon: Settings01Icon,
    title: "Configurable modes",
    body: "Priority settings for solar first, backup first, or peak shaving based on your goals.",
  },
  {
    icon: ShieldEnergyIcon,
    title: "Protected hardware",
    body: "Built in safeguards for overload, short circuit, and temperature extremes.",
  },
  {
    icon: CheckmarkCircle02Icon,
    title: "Matched to your array",
    body: "We size inverter capacity to your panels and battery bank, not the other way around.",
  },
];

export default function InvertersPage() {
  return (
    <SiteShell>
      <PageBanner
        eyebrow="Inverters"
        title="The brain of your power system."
        description="Smart hybrid inverters that keep solar, storage, and the grid working together."
        image="/inverter.jpg"
        imageAlt="Hybrid solar inverter"
      />
      <DetailFeatures
        eyebrow="Why our inverters"
        heading="Smooth power when the grid is unreliable."
        intro="Our hybrid inverters are chosen for clean output, fast backup, and easy monitoring so you stay in control."
        features={features}
      />
    </SiteShell>
  );
}
