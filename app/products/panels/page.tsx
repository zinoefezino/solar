import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageBanner from "@/components/PageBanner";
import DetailFeatures from "@/components/DetailFeatures";
import {
  Sun03Icon,
  ShieldEnergyIcon,
  Leaf01Icon,
  FlashIcon,
  EnergyIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Solar Panels | SolsticePower",
  description:
    "High efficiency solar panels for Nigerian homes and businesses, backed by a 10 year warranty.",
};

const features = [
  {
    icon: Sun03Icon,
    title: "Strong daily yield",
    body: "Modules selected for high output under intense sun and solid performance on cloudy days.",
  },
  {
    icon: ShieldEnergyIcon,
    title: "10 year warranty",
    body: "Panels come with long term coverage so your investment stays protected for years.",
  },
  {
    icon: Leaf01Icon,
    title: "Quiet and clean",
    body: "No fuel, no fumes. Just quiet generation that lowers your carbon footprint.",
  },
  {
    icon: FlashIcon,
    title: "Pairs with storage",
    body: "Designed to work with our hybrid inverters and battery banks as one system.",
  },
  {
    icon: EnergyIcon,
    title: "Roof or ground mount",
    body: "We size arrays for rooftops, carports, and ground mounts based on your site.",
  },
  {
    icon: CheckmarkCircle02Icon,
    title: "Quality checked",
    body: "Every shipment is inspected before installation so you get consistent modules.",
  },
];

export default function PanelsPage() {
  return (
    <SiteShell>
      <PageBanner
        eyebrow="Solar Panels"
        title="Capture more of every sunny hour."
        description="High efficiency panels sized for Nigerian homes, estates, and commercial roofs."
        image="/solar.jpg"
        imageAlt="Solar panels installed on a roof"
      />
      <DetailFeatures
        eyebrow="Why our panels"
        heading="Built for real world Nigerian conditions."
        intro="We specify modules that balance efficiency, durability, and value so your system produces reliably for years."
        features={features}
      />
    </SiteShell>
  );
}
