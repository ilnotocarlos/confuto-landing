import { Button } from "@/components/ui/button";

const steps = [
  "Parliamo del tuo caso",
  "Confuto ti propone un percorso chiaro",
  "Lavoriamo insieme in modo rapido e concreto",
];

export function HowItWorksSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Come funziona
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Da incertezza a decisione in 3 passi.
        </h2>
        <ol className="mt-10 max-w-md space-y-6">
          {steps.map((step, i) => (
            <li key={step} className="flex items-baseline gap-4 text-left">
              <span className="text-3xl font-bold text-muted-foreground">
                {i + 1}.
              </span>
              <span className="text-lg">{step}</span>
            </li>
          ))}
        </ol>
        <Button size="lg" className="mt-10 h-11 px-6 text-base">
          Prenota un assessment gratuito
        </Button>
      </div>
    </section>
  );
}
