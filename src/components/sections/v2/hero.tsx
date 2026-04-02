import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function HeroV2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1B3A2D 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="font-heading text-lg text-charcoal/60 italic mb-8">
          Solo idee condivise cambiano il futuro.
        </p>

        <h1 className="font-heading text-[3rem] md:text-[4rem] leading-[1.1] tracking-tight text-forest">
          <span className="font-bold">Confuto</span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl font-heading font-medium text-forest/80 leading-relaxed max-w-2xl mx-auto">
          Stai creando qualcosa che i clienti{" "}
          <span className="text-blush font-bold">vogliono davvero</span>?
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
            Parlami dei tuoi guai
            <ArrowUpRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
