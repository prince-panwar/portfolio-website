import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/constants";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
