export function BrandsV2() {
  const brands =
    "Alfa Romeo \u00B7 Flos \u00B7 Fincantieri \u00B7 Ferragamo \u00B7 Valentino \u00B7 Costa Crociere \u00B7 Consorzio Agricolo \u00B7 Douglas \u00B7 Intesa San Paolo \u00B7 Generali \u00B7 E.ON \u00B7 ENI \u00B7 Roche \u00B7 Bracco \u00B7 NABA \u00B7 Barilla \u00B7 Provincia di Bolzano \u00B7 Vodafone \u00B7 Land of Fashion \u00B7 Provincia di Mantova \u00B7 Mercato Metropolitano";

  return (
    <section className="min-h-[50vh] flex items-center bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 text-center w-full">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
          08/
        </span>

        <h2 className="font-heading text-[2rem] md:text-[2.5rem] leading-[1.15] tracking-tight text-forest">
          <span className="font-light">In buona compagnia</span>{" "}
          <span className="font-bold">dei grandi</span>
        </h2>

        <p className="mt-8 text-sm text-charcoal/60 leading-loose">{brands}</p>

        <p className="mt-6 text-charcoal/50 italic">
          Oltre ai grandi, si sta bene in compagnia dei medio/piccoli.
        </p>
      </div>
    </section>
  );
}
