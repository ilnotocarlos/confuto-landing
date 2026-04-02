"use client";

import { createContext, useContext, useState } from "react";

type Version = "v1" | "v2";

const VersionContext = createContext<{
  version: Version;
  toggle: () => void;
}>({ version: "v1", toggle: () => {} });

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersion] = useState<Version>("v1");
  const toggle = () => setVersion((v) => (v === "v1" ? "v2" : "v1"));
  return (
    <VersionContext.Provider value={{ version, toggle }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  return useContext(VersionContext);
}
