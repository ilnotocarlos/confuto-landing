import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1B3A2D 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-heading text-[3rem] md:text-[4rem] leading-[1.1] tracking-tight text-forest">
          <span className="font-light">Le idee migliori sono</span>
          <br />
          <span className="font-bold">già nella tua azienda.</span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl font-heading font-medium text-forest/80 leading-relaxed">
          Noi le facciamo emergere, le testiamo
          <br className="hidden md:block" />
          e le trasformiamo in{" "}
          <span className="text-blush font-bold">decisioni</span>.
        </p>

        <p className="mt-6 text-lg text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
          Confuto lavora con PMI e organizzazioni per validare prodotti, servizi
          e processi — in giorni, non in mesi. Niente slide. Niente teoria. Solo
          decisioni chiare e condivise.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
            Prenota un assessment gratuito
            <ArrowUpRight className="ml-2 size-4" />
          </Button>
          <a
            href="#come-funziona"
            className="text-base text-forest font-medium hover:underline underline-offset-4 transition-colors duration-200"
          >
            Scopri come funziona &darr;
          </a>
        </div>
      </div>
    </section>
  );
}
