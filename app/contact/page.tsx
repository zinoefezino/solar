import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Contact from "@/components/Contact";
import ContactHero from "@/components/ContactHero";

export const metadata: Metadata = {
  title: "Contact | SolsticePower",
  description:
    "Request a free solar and inverter quote. Talk to SolsticePower about residential or commercial systems.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactHero />
      <Contact hideIntro />
    </SiteShell>
  );
}
