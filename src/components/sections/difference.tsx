import { Button } from "@/components/ui/button";

const points = [
  "Non fa consulenza tradizionale",
  "Non ti lascia con slide o tanta teoria",
  "Lavora assieme alle persone per arrivare a decisioni chiare",
  "Preferisce lavorare in presenza, sul luogo, guardandosi negli occhi",
  "Usa un approccio pratico da laboratorio / workshop",
];

export function DifferenceSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Cosa rende Confuto diverso
        </p>
        <ul className="mx-auto mt-10 max-w-xl space-y-3">
          {points.map((point) => (
            <li key={point} className="text-lg">
              {point}
            </li>
          ))}
        </ul>
        <Button size="lg" className="mt-10 h-11 px-6 text-base">
          Conosciamoci
        </Button>
      </div>
    </section>
  );
}
