import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ProductsSection } from "@/components/sections/products";
import { DifferenceSection } from "@/components/sections/difference";
import { CaseStudiesSection } from "@/components/sections/case-studies";
// import { AboutSection } from "@/components/sections/about";
import { SectorsSection } from "@/components/sections/sectors";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
