import { Button } from "@/components/ui/button";

export function V2HeroSection() {
  return (
    <section className="relative overflow-hidden bg-v2-bg">
      {/* Zen dot pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #D4D4D0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.3,
        }}
      />
      {/* Pattern break — offset dots in accent */}
      <div
        className="pointer-events-none absolute top-16 right-24 h-40 w-40"
        style={{
          backgroundImage: "radial-gradient(circle, #E8956A 1.5px, transparent 1.5px)",
          backgroundSize: "28px 24px",
          backgroundPosition: "8px 6px",
          opacity: 0.35,
        }}
      />

      <div className="container relative mx-auto px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-v2-text md:text-7xl">
            Pensare bene è già metà del lavoro.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-v2-text-muted font-sans">
            Confuto lavora con organizzazioni e PMI per trasformare idee confuse
            in decisioni chiare. In pochi giorni, non mesi.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-v2-text-muted/80 font-sans">
            Niente slide. Niente teoria. Solo pensiero strutturato e azione
            concreta.
          </p>
          <Button
            size="lg"
            className="mt-12 h-12 cursor-pointer rounded-sm bg-v2-deep px-8 text-base font-semibold text-white transition-colors hover:bg-v2-accent font-sans"
          >
            Raccontaci il tuo caso
          </Button>
        </div>
      </div>
    </section>
  );
}
