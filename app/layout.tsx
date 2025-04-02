import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Aniruddha Narayan | Defense Tech Innovator & AI Systems Builder",
  description: "Founder & CEO of Aminuteman Technologies. Building AI-driven UAV and autonomous systems for defense sovereignty.",
  keywords: ["Aniruddha Narayan", "Defense Tech", "AI Systems", "UAV", "Autonomous Systems", "Valley AI", "Ankosha Drones"],
  authors: [{ name: "Aniruddha Narayan" }],
  openGraph: {
    title: "Aniruddha Narayan | Defense Tech Innovator",
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
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
