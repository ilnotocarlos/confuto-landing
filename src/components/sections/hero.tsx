import { Button } from "@/components/ui/button";

const painPoints = [
  "i clienti non capiscono bene cosa offri",
  "non sei sicuro che i clienti lo compreranno davvero",
  "hai idee confuse e non sai quali abbiano più senso",
  "il prodotto non performa come dovrebbe",
  "internamente lavorate nel caos totale",
  "stai decidendo senza dati reali",
  "non sai più cosa inventarti",
];

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Stai creando qualcosa che i clienti vogliono davvero?
        </h1>
        <p className="mt-8 text-lg text-muted-foreground">
          Stai lavorando su un prodotto, servizio, processo, ma:
        </p>
        <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
          {painPoints.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-foreground">—</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg font-medium">
          Il rischio è di investire tempo, soldi e risorse in qualcosa che non
          funziona.
        </p>
        <p className="text-lg font-medium">
          E di perdersi nuove opportunità di crescita.
        </p>
        <Button size="lg" className="mt-10 h-11 px-6 text-base">
          Parlami dei tuoi guai
        </Button>
      </div>
    </section>
  );
}
