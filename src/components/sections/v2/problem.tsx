import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ProblemV2() {
  const painPoints = [
    { text: "I clienti non capiscono bene cosa offri", border: "border-blush" },
    {
      text: "Non sei sicuro che i clienti lo compreranno davvero",
      border: "border-mint",
    },
    {
      text: "Hai idee confuse e non sai quali abbiano più senso",
      border: "border-butter",
    },
    {
      text: "Il prodotto non performa come dovrebbe",
      border: "border-blush",
    },
    {
      text: "Internamente lavorate nel caos totale",
      border: "border-mint",
    },
    { text: "Stai decidendo senza dati reali", border: "border-butter" },
    { text: "Non sai più cosa inventarti", border: "border-blush" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-mint/20 overflow-hidden">
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1B3A2D 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            01/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Stai lavorando su un</span>
            <br />
            <span className="font-bold">prodotto, servizio, processo, ma:</span>
          </h2>

          <div className="mt-10 space-y-3">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className={`border-l-[3px] ${point.border} pl-6 py-2`}
              >
                <p className="text-lg text-charcoal">{point.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-charcoal/60 leading-relaxed">
            Il rischio è di investire tempo, soldi e risorse in qualcosa che non
            funziona. E di perdersi nuove opportunità di crescita.
          </p>

          <div className="mt-8">
            <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
              Parlami dei tuoi guai
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="relative">
            <div className="w-56 h-56 rounded-full bg-blush/30" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-butter/40" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-mint/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
