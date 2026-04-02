import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Parliamo del tuo caso",
    bg: "bg-mint/30",
  },
  {
    number: "02",
    title: "Confuto ti propone un percorso chiaro",
    bg: "bg-blush/30",
  },
  {
    number: "03",
    title: "Lavoriamo insieme in modo rapido e concreto",
    bg: "bg-butter/30",
  },
];

export function HowItWorksV2() {
  return (
    <section
      id="come-funziona"
      className="min-h-[70vh] flex items-center bg-cream"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            07/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Come</span>{" "}
            <span className="font-bold">funziona</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`${step.bg} rounded-2xl p-8 flex flex-col transition-transform duration-200 hover:scale-[1.02]`}
              style={{
                transform:
                  i === 1
                    ? "rotate(-1deg)"
                    : i === 2
                      ? "rotate(1deg)"
                      : undefined,
              }}
            >
              <span className="font-mono text-sm text-charcoal/40">
                {step.number}/
              </span>
              <h3 className="font-heading text-2xl font-bold text-forest mt-3">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
            Prenota una call
            <ArrowUpRight className="ml-2 size-4" />
          </Button>
          <a
            href="#"
            className="text-base text-forest font-medium hover:underline underline-offset-4 transition-colors duration-200"
          >
            Compila il Typeform &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
