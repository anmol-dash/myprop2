"use client";

import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/context/ToastContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  );
}
