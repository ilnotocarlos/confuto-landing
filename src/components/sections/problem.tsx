export function ProblemSection() {
  const painPoints = [
    {
      text: "Hai investito mesi su un prodotto e i clienti non lo capiscono",
      border: "border-blush",
    },
    {
      text: "Il team ha dieci idee ma nessun criterio per scegliere",
      border: "border-mint",
    },
    {
      text: "Stai decidendo sulla base di opinioni, non di evidenze",
      border: "border-butter",
    },
    {
      text: "Il processo interno è diventato più complesso del prodotto stesso",
      border: "border-blush",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-mint/20 overflow-hidden">
      {/* Dot grid pattern on right */}
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
            02/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Ti suona</span>{" "}
            <span className="font-bold">familiare?</span>
          </h2>

          <div className="mt-10 space-y-4">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className={`border-l-[3px] ${point.border} pl-6 py-3`}
              >
                <p className="text-lg text-charcoal">{point.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-charcoal/60 leading-relaxed">
            Il rischio è concreto: bruciare budget, tempo e energie su qualcosa
            che nessuno comprerà. E nel frattempo, perdere opportunità di
            crescita.
          </p>
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
