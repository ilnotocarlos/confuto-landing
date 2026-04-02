import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="prodotti" className="min-h-screen flex items-center bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            04/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Due percorsi, un obiettivo:</span>
            <br />
            <span className="font-bold">decidere meglio.</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal/60 max-w-xl mx-auto">
            Non sai quale scegliere? Ne parliamo nella call.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* IDEA SPRINT */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col min-h-[600px] transition-transform duration-200 hover:scale-[1.02]">
            <div className="h-3 bg-mint" />
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="font-heading text-[2rem] font-bold text-forest">
                Idea Sprint
              </h3>
              <p className="mt-2 text-lg text-charcoal/70">
                Per chi ha un&apos;idea ma non sa se funziona.
              </p>

              <h4 className="mt-6 font-heading text-lg font-medium text-forest">
                Quando serve
              </h4>
              <div className="mt-3 space-y-3">
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  &ldquo;Ho 3 idee, quale scelgo?&rdquo;
                </p>
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  &ldquo;Voglio testare prima di investire&rdquo;
                </p>
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  &ldquo;Il team ha proposte ma non riusciamo a
                  convergere&rdquo;
                </p>
              </div>

              <h4 className="mt-6 font-heading text-lg font-medium text-forest">
                Cosa ottieni
              </h4>
              <div className="mt-3 space-y-2 text-charcoal/80">
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">
                    01
                  </span>
                  1 idea selezionata e validata con clienti reali
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">
                    02
                  </span>
                  Prototipo o simulazione testata
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">
                    03
                  </span>
                  Metodo replicabile dal tuo team
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand/50 flex justify-between text-sm">
                <p>
                  <span className="font-medium text-forest">Tempi</span>
                  <br />
                  <span className="text-charcoal/60">Da 3 giorni</span>
                </p>
                <p>
                  <span className="font-medium text-forest">Investimento</span>
                  <br />
                  <span className="text-charcoal/60">Da &euro;4.500</span>
                </p>
              </div>

              <p className="mt-4 text-xs text-charcoal/40">
                Include: Assessment iniziale gratuito &middot; Sconto 10% sul
                primo progetto
              </p>

              <div className="mt-auto pt-6">
                <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
                  Scopri Idea Sprint
                  <ArrowUpRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* FIX IT */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col min-h-[600px] transition-transform duration-200 hover:scale-[1.02]">
            <div className="h-3 bg-blush" />
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="font-heading text-[2rem] font-bold text-forest">
                Fix It
              </h3>
              <p className="mt-2 text-lg text-charcoal/70">
                Per chi ha già un prodotto ma non funziona abbastanza.
              </p>

              <h4 className="mt-6 font-heading text-lg font-medium text-forest">
                Quando serve
              </h4>
              <div className="mt-3 space-y-3">
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  &ldquo;I clienti non convertono e non capiamo perché&rdquo;
                </p>
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  &ldquo;L&apos;esperienza d&apos;uso è un disastro&rdquo;
                </p>
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  &ldquo;Il processo interno rallenta tutto&rdquo;
                </p>
              </div>

              <h4 className="mt-6 font-heading text-lg font-medium text-forest">
                Cosa ottieni
              </h4>
              <div className="mt-3 space-y-2 text-charcoal/80">
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">
                    01
                  </span>
                  Mappa delle frizioni reali (clienti o processi interni)
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">
                    02
                  </span>
                  Prodotto, servizio o processo ristrutturato
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">
                    03
                  </span>
                  Azioni concrete implementabili da subito
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand/50 flex justify-between text-sm">
                <p>
                  <span className="font-medium text-forest">Tempi</span>
                  <br />
                  <span className="text-charcoal/60">Da 3 sessioni</span>
                </p>
                <p>
                  <span className="font-medium text-forest">Investimento</span>
                  <br />
                  <span className="text-charcoal/60">Da &euro;5.000</span>
                </p>
              </div>

              <p className="mt-4 text-xs text-charcoal/40">
                Include: Assessment iniziale gratuito &middot; Sconto 10% sul
                primo progetto
              </p>

              <div className="mt-auto pt-6">
                <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
                  Scopri Fix It
                  <ArrowUpRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-charcoal/60">
          Non trovi il tuo caso?{" "}
          <a
            href="#cta"
            className="text-forest font-medium hover:underline underline-offset-4 transition-colors duration-200"
          >
            Parliamone &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
