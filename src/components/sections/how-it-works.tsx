import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Ci racconti",
    description:
      "Assessment gratuito di 30 minuti. Capiamo il contesto, il problema e ti diciamo se e come possiamo aiutarti. Zero impegno.",
    bg: "bg-mint/30",
  },
  {
    number: "02",
    title: "Lavoriamo insieme",
    description:
      "Workshop intensivi, in presenza, nel tuo spazio. Prototipi, test con clienti reali, decisioni prese sul campo. Non nel nostro ufficio.",
    bg: "bg-blush/30",
  },
  {
    number: "03",
    title: "Esci con un piano",
    description:
      "Output concreti e implementabili dal giorno dopo. Non una presentazione: un'azione chiara, condivisa con il team.",
    bg: "bg-butter/30",
  },
];

export function HowItWorksSection() {
  return (
    <section id="come-funziona" className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            03/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Da problema a decisione,</span>
            <br />
            <span className="font-bold">in 3 passi.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative transition-transform duration-200 hover:scale-[1.02]"
              style={{ transform: i === 1 ? "rotate(-1deg)" : i === 2 ? "rotate(1deg)" : undefined }}
            >
              {/* Hand-drawn circle around the card */}
              <svg
                className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none z-10"
                viewBox="0 0 320 280"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id={`sketch-${i}`}>
                    <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
                  </filter>
                </defs>
                <rect
                  x="8"
                  y="8"
                  width="304"
                  height="264"
                  rx="24"
                  ry="24"
                  stroke="#1B3A2D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={i === 1 ? "8 6" : "0"}
                  opacity="0.25"
                  fill="none"
                  style={{ filter: `url(#sketch-${i})` }}
                />
              </svg>

              <div className={`${step.bg} rounded-2xl p-8 flex flex-col relative z-0`}>
                <span className="font-mono text-sm text-charcoal/40">
                  {step.number}/
                </span>
                <h3 className="font-heading text-2xl font-bold text-forest mt-3">
                  {step.title}
                </h3>
                <p className="mt-4 text-charcoal/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
            Prenota l&apos;assessment gratuito
            <ArrowUpRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
