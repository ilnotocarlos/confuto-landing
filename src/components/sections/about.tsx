export function AboutSection() {
  const brands =
    "Alfa Romeo \u00B7 Flos \u00B7 Fincantieri \u00B7 Ferragamo \u00B7 Valentino \u00B7 Costa Crociere \u00B7 Intesa San Paolo \u00B7 Generali \u00B7 E.ON \u00B7 ENI \u00B7 Roche \u00B7 Barilla \u00B7 Vodafone \u00B7 NABA \u00B7 Douglas \u00B7 Land of Fashion";

  return (
    <section id="chi-siamo" className="min-h-screen flex items-center bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center mb-14">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            07/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Chi c&apos;è</span>{" "}
            <span className="font-bold">dietro</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="w-64 md:w-full max-w-xs aspect-[3/4] rounded-2xl bg-mint/30 flex items-center justify-center">
              <span className="text-charcoal/30 text-sm">
                Foto del fondatore
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-forest">
              [Nome Cognome]
            </h3>
            <p className="text-charcoal/60 mt-1">Fondatore di Confuto</p>

            <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
              Oltre 15 anni di esperienza in design, strategia e innovazione. Ha
              lavorato con organizzazioni di ogni dimensione — dalle startup alle
              multinazionali — per trasformare idee confuse in prodotti, servizi
              e processi che funzionano davvero.
            </p>
            <p className="mt-4 text-lg text-charcoal/80 leading-relaxed">
              Il suo approccio nasce da una convinzione semplice: le migliori
              idee sono già dentro l&apos;azienda. Serve qualcuno che le faccia
              emergere, le metta alla prova e le trasformi in decisioni.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-4">
            Brand con cui ha lavorato
          </p>
          <p className="text-sm text-charcoal/60 leading-relaxed">{brands}</p>
          <p className="mt-4 text-charcoal/50 italic">
            Oltre ai grandi, lavora ogni giorno con PMI e realtà medio-piccole.
          </p>
        </div>
      </div>
    </section>
  );
}
