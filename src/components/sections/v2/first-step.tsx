import { Button } from "@/components/ui/button";

export function V2FirstStepSection() {
  return (
    <section className="relative overflow-hidden border-t border-v2-border bg-white">
      {/* Zen dot pattern — mirror of hero */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D4D4D0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.2,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-12 left-16 h-32 w-32"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E8956A 1.5px, transparent 1.5px)",
          backgroundSize: "28px 24px",
          backgroundPosition: "8px 6px",
          opacity: 0.3,
        }}
      />

      <div className="container relative mx-auto px-6 py-28 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold leading-snug text-v2-text md:text-5xl">
            Il primo passo è sempre una conversazione.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-v2-text-muted font-sans">
            Raccontaci dove sei e dove vorresti arrivare. Nessun impegno,
            nessuna vendita. Solo una conversazione onesta per capire se possiamo
            aiutarti.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12 cursor-pointer rounded-sm bg-v2-deep px-8 text-base font-semibold text-white transition-colors hover:bg-v2-accent font-sans"
            >
              Prenota una call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 cursor-pointer rounded-sm border-v2-deep px-8 text-base font-semibold text-v2-deep transition-colors hover:bg-v2-bg-alt font-sans"
            >
              Compila il form
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
