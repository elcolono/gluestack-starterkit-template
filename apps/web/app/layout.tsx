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
  applicationName: "Universal Next.js Expo Template",
  title: {
    default: "Universal Next.js + Expo Template",
    template: "%s | Universal Next.js + Expo Template"
  },
  description:
    "A universal monorepo starter for building Next.js and Expo apps with shared Gluestack UI components.",
  keywords: [
    "Next.js",
    "Expo",
    "React Native",
    "Gluestack UI",
    "Universal App",
    "Monorepo"
  ],
  openGraph: {
    title: "Universal Next.js + Expo Template",
    description:
      "Build web and native app surfaces from one shared Gluestack UI workspace.",
    siteName: "Universal Next.js + Expo Template",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Universal Next.js + Expo Template",
    description:
      "A shared starter for Next.js, Expo, React Native, and Gluestack UI."
  },
  robots: {
    index: true,
    follow: true
  }
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
