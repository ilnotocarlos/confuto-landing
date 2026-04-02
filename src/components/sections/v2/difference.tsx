export function DifferenceV2() {
  const points = [
    "Non fa consulenza tradizionale",
    "Non ti lascia con slide o tanta teoria",
    "Lavora assieme alle persone per arrivare a decisioni chiare",
    "Preferisce lavorare in presenza, sul luogo, guardandosi negli occhi",
    "Usa un approccio pratico da laboratorio / workshop",
  ];

  return (
    <section className="min-h-[70vh] flex items-center bg-mint/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            05/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Cosa rende Confuto</span>
            <br />
            <span className="font-bold">
              <span className="text-blush">diverso</span>
            </span>
          </h2>
        </div>

        <div className="mt-14 max-w-2xl mx-auto space-y-4">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-8 py-5 text-lg text-forest font-medium transition-transform duration-200 hover:scale-[1.02]"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
