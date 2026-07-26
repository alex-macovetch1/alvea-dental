import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

// Used only for the few italic accents inside headings.
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: "italic",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alvea-taupe.vercel.app"),
  title: {
    default: "ALVEA — Clinică stomatologică în Chișinău",
    template: "%s · ALVEA",
  },
  description:
    "Stomatologie fără frică și fără surprize la plată. Consultație și scanare 3D gratuite, plan de tratament cu preț fix, garanție 3 ani. Chișinău, str. Alexandru cel Bun 87.",
  keywords: [
    "stomatologie Chișinău",
    "clinică dentară",
    "implanturi dentare",
    "ortodonție invizibilă",
    "стоматология Кишинёв",
  ],
  openGraph: {
    type: "website",
    locale: "ro_MD",
    siteName: "ALVEA",
    title: "ALVEA — Stomatologie fără frică",
    description:
      "Consultație și scanare 3D gratuite. Plan de tratament cu preț fix, scris înainte de prima anestezie.",
    images: ["/img/clinic-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" data-lang="ro" className={`${manrope.variable} ${instrument.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
