"use client";

import { VersionProvider, useVersion } from "@/components/version-context";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

// V1 sections
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ProductsSection } from "@/components/sections/products";
import { DifferenceSection } from "@/components/sections/difference";
import { CaseStudiesSection } from "@/components/sections/case-studies";
// import { AboutSection } from "@/components/sections/about";
import { SectorsSection } from "@/components/sections/sectors";
import { FinalCtaSection } from "@/components/sections/final-cta";

// V2 sections
import { HeroV2 } from "@/components/sections/v2/hero";
import { ProblemV2 } from "@/components/sections/v2/problem";
import { WhatWeDoV2 } from "@/components/sections/v2/what-we-do";
import { ProductsV2 } from "@/components/sections/v2/products";
import { CaseStudiesV2 } from "@/components/sections/v2/case-studies";
import { DifferenceV2 } from "@/components/sections/v2/difference";
import { SectorsV2 } from "@/components/sections/v2/sectors";
import { HowItWorksV2 } from "@/components/sections/v2/how-it-works";
import { BrandsV2 } from "@/components/sections/v2/brands";
import { FinalCtaV2 } from "@/components/sections/v2/final-cta";

function PageContent() {
  const { version } = useVersion();

  if (version === "v2") {
    return (
      <main>
        <HeroV2 />
        <ProblemV2 />
        <WhatWeDoV2 />
        <ProductsV2 />
        <CaseStudiesV2 />
        <DifferenceV2 />
        <SectorsV2 />
        <HowItWorksV2 />
        <BrandsV2 />
        <FinalCtaV2 />
      </main>
    );
  }

  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ProductsSection />
      <DifferenceSection />
      <CaseStudiesSection />
      {/* <AboutSection /> */}
      <SectorsSection />
      <FinalCtaSection />
    </main>
  );
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
