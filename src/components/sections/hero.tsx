import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
      {/* Organic blobs */}
      <svg
        className="absolute -top-20 -right-32 w-[500px] h-[500px] opacity-[0.1]"
        viewBox="0 0 500 500"
      >
        <circle cx="250" cy="250" r="200" fill="#C8E6D0" />
      </svg>
      <svg
        className="absolute -bottom-16 -left-24 w-[400px] h-[400px] opacity-[0.08]"
        viewBox="0 0 400 400"
      >
        <ellipse cx="200" cy="200" rx="180" ry="150" fill="#F5C1B5" />
      </svg>
      <svg
        className="absolute top-1/3 left-1/2 w-[300px] h-[300px] opacity-[0.06]"
        viewBox="0 0 300 300"
      >
        <circle cx="150" cy="150" r="120" fill="#F6E8A0" />
      </svg>

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
