import { Button } from "@/components/ui/button";

const steps = [
  "Parliamo del tuo caso",
  "Confuto ti propone un percorso chiaro",
  "Lavoriamo insieme in modo rapido e concreto",
];

export function HowItWorksSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Come funziona
        </p>
        <ol className="mx-auto mt-10 max-w-md space-y-6">
          {steps.map((step, i) => (
            <li key={step} className="flex items-baseline gap-4 text-left">
              <span className="text-3xl font-bold text-muted-foreground">
                {i + 1}.
              </span>
              <span className="text-lg">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="h-11 px-6 text-base">
            Prenota una call
          </Button>
          <Button variant="outline" size="lg" className="h-11 px-6 text-base">
            Compila il Typeform e sarai ricontattato
          </Button>
        </div>
      </div>
    </section>
  );
}
