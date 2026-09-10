import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonial";
import FAQ from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <TrustBar />
      <Products />
      <Benefits />
      <HowItWorks />
      <Projects />
      <Packages />
      <Testimonials />
      <FAQ />
      <Contact />
    </SiteShell>
  );
}
