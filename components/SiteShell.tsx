import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuoteBar from "@/components/MobileQuoteBar";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="pb-20 md:pb-0">
      <Header />
      {children}
      <Footer />
      <MobileQuoteBar />
    </main>
  );
}