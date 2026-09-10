import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageBanner from "@/components/PageBanner";
import DetailFeatures from "@/components/DetailFeatures";
import {
  Calendar03Icon,
  ToolsIcon,
  CheckmarkCircle02Icon,
  ShieldEnergyIcon,
  UserIcon,
  FlashIcon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Installation | SolsticePower",
  description:
    "Professional solar and inverter installation across Nigeria, usually complete in 1 to 3 days.",
};

const features = [
  {
    icon: Calendar03Icon,
    title: "Clear timeline",
    body: "Most residential installs wrap up in 1 to 3 days once materials are on site.",
  },
  {
    icon: ToolsIcon,
    title: "Certified crews",
    body: "Trained installers handle mounting, DC and AC wiring, and safety checks.",
  },
  {
    icon: CheckmarkCircle02Icon,
    title: "Permits included",
    body: "We manage documentation and approvals so you are not chasing paperwork.",
  },
  {
    icon: ShieldEnergyIcon,
    title: "Safety first",
    body: "Earthing, surge protection, and isolation are part of every handover.",
  },
  {
    icon: UserIcon,
    title: "Owner walkthrough",
    body: "We show you the app, breakers, and what to expect on day one.",
  },
  {
    icon: FlashIcon,
    title: "Commissioned and live",
    body: "Systems leave site producing power with monitoring already connected.",
  },
];

export default function InstallationPage() {
  return (
    <SiteShell>
      <PageBanner
        eyebrow="Installation"
        title="Clean installs, start to finish."
        description="From survey to commissioning, our team delivers systems that look tidy and work hard."
        image="/install.jpg"
        imageAlt="Solar installation team at work"
      />
      <DetailFeatures
        eyebrow="What to expect"
        heading="A process built around your schedule."
        intro="We coordinate materials, roof access, and electrical work so disruption stays low and results stay high."
        features={features}
      />
    </SiteShell>
  );
}
