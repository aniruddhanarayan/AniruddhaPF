import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Aniruddha Narayan — Founder & CEO, Aminuteman Technologies",
  description: "Founder & CEO of Aminuteman Technologies. Building AI-driven UAV and autonomous systems for defense sovereignty. 12× Hackathon Champion.",
  keywords: ["Aniruddha Narayan", "Defense Tech", "AI Systems", "UAV", "Autonomous Systems", "Valley AI", "Ankosha Drones", "Aminuteman Technologies"],
  authors: [{ name: "Aniruddha Narayan" }],
  openGraph: {
    title: "Aniruddha Narayan — Founder & CEO, Aminuteman Technologies",
    description: "Building AI-driven UAV and autonomous systems for defense sovereignty",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Bebas+Neue&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
