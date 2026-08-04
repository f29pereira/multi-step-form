import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Ubuntu } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { getDictionary, hasLocale } from "./dictionaries";
import StoreProvider from "../StoreProvider";

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
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("APP_THEME")?.value;
  const isDarkTheme = themeCookie === "dark";

  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html
      lang={(await params).lang}
      className={`${isDarkTheme ? "dark-theme" : undefined} ${ubuntu.variable}`}
    >
      <body>
        <StoreProvider
          localeCode={lang}
          dictionary={dict}
          isDarkTheme={isDarkTheme}
        >
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
