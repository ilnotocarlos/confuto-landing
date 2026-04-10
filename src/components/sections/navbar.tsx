"use client";

import { Separator } from "@/components/ui/separator";
import { useVersion } from "@/components/version-context";

export function Navbar() {
  const { version, setVersion } = useVersion();
  const isV2 = version === "v2";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur ${
        isV2
          ? "border-v2-border bg-v2-bg/95 supports-[backdrop-filter]:bg-v2-bg/60 font-sans"
          : "bg-background/95 supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div
            className={`h-8 w-8 rounded-full ${isV2 ? "bg-v2-bg-alt" : "bg-muted"}`}
          />
          <div className="flex items-baseline gap-2">
            <span
              className={`text-lg tracking-tight ${
                isV2 ? "font-serif font-bold text-v2-text" : "font-semibold"
              }`}
            >
              Confuto
            </span>
            <Separator orientation="vertical" className="mx-1 h-4" />
            <span
              className={`text-sm ${
                isV2 ? "text-v2-text-muted" : "text-muted-foreground"
              }`}
            >
              Solo idee condivise cambiano il futuro
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-1 rounded-lg border p-0.5 text-sm font-medium ${
              isV2 ? "border-v2-border" : ""
            }`}
          >
            <button
              onClick={() => setVersion("v1")}
              className={`rounded-md px-2.5 py-1 transition-colors ${
                version === "v1"
                  ? isV2
                    ? "bg-v2-deep text-white"
                    : "bg-foreground text-background"
                  : isV2
                    ? "text-v2-text-muted hover:text-v2-text"
                    : "text-muted-foreground hover:text-foreground"
              }`}
            >
              V1
            </button>
            <button
              onClick={() => setVersion("v2")}
              className={`rounded-md px-2.5 py-1 transition-colors ${
                version === "v2"
                  ? isV2
                    ? "bg-v2-deep text-white"
                    : "bg-foreground text-background"
                  : isV2
                    ? "text-v2-text-muted hover:text-v2-text"
                    : "text-muted-foreground hover:text-foreground"
              }`}
            >
              V2
            </button>
          </div>
          <nav className="flex items-center gap-1 text-sm font-medium">
            <button
              className={`px-2 py-1 underline underline-offset-4 ${isV2 ? "text-v2-text" : ""}`}
            >
              IT
            </button>
            <span
              className={isV2 ? "text-v2-text-muted" : "text-muted-foreground"}
            >
              /
            </span>
            <button
              className={`px-2 py-1 ${
                isV2
                  ? "text-v2-text-muted hover:text-v2-text"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
