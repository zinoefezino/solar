import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageBanner from "@/components/PageBanner";
import DetailFeatures from "@/components/DetailFeatures";
import {
  Settings01Icon,
  Calendar03Icon,
  FlashIcon,
  CustomerService01Icon,
  ShieldEnergyIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Maintenance | SolsticePower",
  description:
    "Scheduled solar maintenance, cleaning, and support to keep your SolsticePower system performing.",
};

const features = [
  {
    icon: Calendar03Icon,
    title: "Scheduled visits",
    body: "Periodic inspections keep panels clean and connections tight before issues grow.",
  },
  {
    icon: Settings01Icon,
    title: "Firmware and settings",
    body: "We keep inverter software and operating modes aligned with your usage.",
  },
  {
    icon: FlashIcon,
    title: "Performance checks",
    body: "We compare expected yield to actual production and flag anything unusual.",
  },
  {
    icon: CustomerService01Icon,
    title: "Priority support",
    body: "Maintenance clients get faster response when something needs a site visit.",
  },
  {
    icon: ShieldEnergyIcon,
    title: "Warranty friendly",
    body: "Documented service history helps protect your component warranties.",
  },
  {
    icon: CheckmarkCircle02Icon,
    title: "Simple plans",
    body: "Choose annual or biannual coverage that fits residential or commercial sites.",
  },
];

export default function MaintenancePage() {
  return (
    <SiteShell>
      <PageBanner
        eyebrow="Maintenance"
        title="Keep every watt earning its keep."
        description="Proactive care so dust, loose connections, and settings drift never cut into your savings."
        image="/hero.jpg"
        imageAlt="Solar system maintenance"
      />
      <DetailFeatures
        eyebrow="Ongoing care"
        heading="Support after the install day."
        intro="A well maintained system lasts longer and produces more. Our plans make that routine, not reactive."
        features={features}
      />
    </SiteShell>
  );
}
