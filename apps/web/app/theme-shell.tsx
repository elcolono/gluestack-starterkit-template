"use client";

import { createContext, useContext, useState } from "react";
import {
  Button,
  ButtonIcon,
  GluestackUIProvider,
  Moon,
  Sun
} from "@repo/ui";

type ThemeMode = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";
type ThemeContextValue = {
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getResolvedTheme(): ResolvedTheme {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }

  return "light";
}

export function ThemeShell({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("system");

  const toggleTheme = () => {
    const currentTheme = getResolvedTheme();
    const nextMode = currentTheme === "dark" ? "light" : "dark";

    setMode(nextMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <GluestackUIProvider mode={mode}>{children}</GluestackUIProvider>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return null;
  }

  return (
    <Button
      action="secondary"
      aria-label="Toggle color mode"
      className="h-10 w-10 rounded-full border-outline-200 bg-background-50 !p-0 shadow-sm"
      onPress={theme.toggleTheme}
      size="sm"
      variant="outline"
    >
      <ButtonIcon
        aria-hidden={true}
        as={Sun}
        className="text-warning-500 dark:hidden"
      />
      <ButtonIcon
        aria-hidden={true}
        as={Moon}
        className="hidden text-info-500 dark:inline-flex"
      />
    </Button>
  );
}
