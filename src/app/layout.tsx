import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engr. Marwan Ahmad | Executive Portfolio",
  description:
    "Ultra-premium executive portfolio for Engr. Marwan Ahmad, Commissioner for Works and Housing, Kano State.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="bg-background text-text min-h-screen font-body antialiased">
        {children}
      </body>
    </html>
  );
}
