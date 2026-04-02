import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="cta" className="bg-cream px-4 md:px-8 py-24">
      <div className="relative max-w-5xl mx-auto bg-forest rounded-2xl py-20 px-8 text-center overflow-hidden">
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C8E6D0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/20 font-mono text-xs text-cream/40 mb-6">
            09/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-cream">
            <span className="font-light">Hai un prodotto, un servizio</span>
            <br />
            <span className="font-bold">o un processo che non convince?</span>
          </h2>

          <p className="mt-6 text-lg text-cream/70 leading-relaxed max-w-xl mx-auto">
            Il primo assessment è gratuito. 30 minuti per capire se possiamo
            aiutarti.
          </p>

          <div className="mt-10">
            <Button className="bg-cream text-forest rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-cream/90 active:scale-[0.98] transition-all duration-200">
              Prenota una call
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>

          <p className="mt-8 text-sm text-cream/50">
            Preferisci scrivere?{" "}
            <a
              href="mailto:ciao@confuto.com"
              className="text-cream/80 underline underline-offset-4 hover:text-cream transition-colors duration-200"
            >
              ciao@confuto.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
