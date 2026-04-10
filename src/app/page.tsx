import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { WhatWeDoSection } from "@/components/sections/what-we-do";
import { ProductsSection } from "@/components/sections/products";
import { QuoteSection } from "@/components/sections/quote";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { SectorsSection } from "@/components/sections/sectors";
import { Quote2Section } from "@/components/sections/quote2";
import { DifferenceSection } from "@/components/sections/difference";
import { SkillsSection } from "@/components/sections/skills";
import { ClientsSection } from "@/components/sections/clients";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { Quote3Section } from "@/components/sections/quote3";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <ProductsSection />
        <QuoteSection />
        <CaseStudiesSection />
        <SectorsSection />
        <Quote2Section />
        <DifferenceSection />
        <SkillsSection />
        <ClientsSection />
        <HowItWorksSection />
        <Quote3Section />
      </main>
      <Footer />
    </>
  );
}
