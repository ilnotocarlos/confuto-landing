import { Separator } from "@/components/ui/separator";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold tracking-tight">
              Confuto
            </span>
            <Separator orientation="vertical" className="mx-1 h-4" />
            <span className="text-sm text-muted-foreground">
              Solo idee condivise cambiano il futuro
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <button className="px-2 py-1 underline underline-offset-4">IT</button>
          <span className="text-muted-foreground">/</span>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground">
            EN
          </button>
        </nav>
      </div>
    </header>
  );
}
