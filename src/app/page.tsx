"use client";

import { VersionProvider, useVersion } from "@/components/version-context";
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
import { V2HeroSection } from "@/components/sections/v2/hero";
import { V2MethodSection } from "@/components/sections/v2/method";
import { V2QuoteSection } from "@/components/sections/v2/quote";
import { V2PathsSection } from "@/components/sections/v2/paths";
import { V2ProofSection } from "@/components/sections/v2/proof";
import { V2DifferenceSection } from "@/components/sections/v2/difference";
import { V2TerritorySection } from "@/components/sections/v2/territory";
import { V2FirstStepSection } from "@/components/sections/v2/first-step";

function V1() {
  return (
    <>
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
    </>
  );
}

function V2() {
  return (
    <>
      <V2HeroSection />
      <V2MethodSection />
      <V2QuoteSection>
        La chiarezza non è il punto di arrivo. È il punto di partenza.
      </V2QuoteSection>
      <V2PathsSection />
      <V2ProofSection />
      <V2QuoteSection>
        Tutti cercano idee nuove. Le migliori sono già qui. Serve solo farle
        emergere.
      </V2QuoteSection>
      <V2DifferenceSection />
      <V2TerritorySection />
      <V2FirstStepSection />
    </>
  );
}

function PageContent() {
  const { version } = useVersion();
  return <main className="flex-1">{version === "v1" ? <V1 /> : <V2 />}</main>;
}

export default function Home() {
  return (
    <VersionProvider>
      <Navbar />
      <PageContent />
      <Footer />
    </VersionProvider>
  );
}
