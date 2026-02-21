"use client";

import { ThemeProvider } from "next-themes";
import { ModalProvider } from "@/context/ModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  );
}
