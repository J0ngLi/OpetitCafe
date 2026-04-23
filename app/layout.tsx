import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans"
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "O'PETIT CAFE | European Cuisine in Astana",
  description:
    "Modern European cuisine cafe in Astana: breakfast, business lunch, desserts, coffee, Wolt delivery, and banquets up to 45 guests."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-cream text-charcoal antialiased`}>
        {children}
      </body>
    </html>
  );
}
