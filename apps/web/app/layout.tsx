import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GluestackUIProvider } from "@repo/ui";
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
      className={`${geistSans.variable} ${geistMono.variable} light h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body suppressHydrationWarning>
        <GluestackUIProvider mode="light">{children}</GluestackUIProvider>
      </body>
    </html>
  );
}
