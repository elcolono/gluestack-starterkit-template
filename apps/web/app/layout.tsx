import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeShell } from "./theme-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codex App Monorepo",
  description: "Shared gluestack modules for Next.js and Expo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeShell>{children}</ThemeShell>
      </body>
    </html>
  );
}
