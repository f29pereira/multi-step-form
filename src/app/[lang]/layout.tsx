import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Multi-step form",
  description: "Frontend Mentor: Multi-step form",
};

/**
 * Generates static routes for a given set of locales
 */
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  return (
    <html lang={(await params).lang} className={`${ubuntu.variable}`}>
      <body>{children}</body>
    </html>
  );
}
