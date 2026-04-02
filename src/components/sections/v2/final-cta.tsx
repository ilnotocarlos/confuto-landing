import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function FinalCtaV2() {
  return (
    <section id="cta" className="bg-cream px-4 md:px-8 py-24">
      <div className="relative max-w-5xl mx-auto bg-forest rounded-2xl py-20 px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C8E6D0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          <p className="font-heading text-xl text-cream/60 italic mb-8">
            Le migliori idee sono già dentro: serve solo farle parlare.
          </p>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-cream">
            <span className="font-bold">Parlami dei tuoi guai.</span>
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button className="bg-cream text-forest rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-cream/90 active:scale-[0.98] transition-all duration-200">
              Prenota una call
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
            <a
              href="#"
              className="text-base text-cream/70 font-medium hover:underline underline-offset-4 hover:text-cream transition-colors duration-200"
            >
              Compila il Typeform &rarr;
            </a>
          </div>

          <p className="mt-8 text-sm text-cream/40">
            Preferisci scrivere?{" "}
            <a
              href="mailto:ciao@confuto.com"
              className="text-cream/60 underline underline-offset-4 hover:text-cream transition-colors duration-200"
            >
              ciao@confuto.com
            </a>
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-charcoal/40 italic text-sm max-w-lg mx-auto">
        Tutti dicono di pensare fuori dagli schemi, ma nessuno butta via lo
        schema.
      </p>
    </section>
  );
}
