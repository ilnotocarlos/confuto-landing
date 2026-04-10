import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { FamiliarSection } from "@/components/sections/familiar";
import { WhatWeDoSection } from "@/components/sections/what-we-do";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ProductsSection } from "@/components/sections/products";
import { DifferenceSection } from "@/components/sections/difference";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { SectorsSection } from "@/components/sections/sectors";
import { ClientsSection } from "@/components/sections/clients";
import { Quote3Section } from "@/components/sections/quote3";
import { CtaSection } from "@/components/sections/cta";
import { AboutSection } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FamiliarSection />
        <WhatWeDoSection />
        <HowItWorksSection />
        <ProductsSection />
        <DifferenceSection />
        <CaseStudiesSection />
        <SectorsSection />
        <ClientsSection />
        <Quote3Section />
        <CtaSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
