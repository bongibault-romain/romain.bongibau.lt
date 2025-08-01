"use client";

import { ThemeProvider } from "next-themes";

export default function Theme({ children }: { children: React.ReactNode }) {
  console.log("Rendering ThemeProvider");
  
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
