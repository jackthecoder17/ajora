import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const dm = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-dm", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ajora.example"),
  title: { default: "Ajora | Your ajo, minus the wahala", template: "%s | Ajora" },
  description: "Ajora runs ajo and esusu savings circles for market associations and co-ops: collect by transfer, USSD or cash, match every naira, and pay out with two officers signing off.",
  openGraph: { type: "website", siteName: "Ajora", title: "Ajora | Your ajo, minus the wahala", url: "https://ajora.example/" },
};

export const viewport: Viewport = { themeColor: "#fff6e8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dm.variable} ${caveat.variable}`}>
      <body className="overflow-x-clip">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-yellow focus:px-4 focus:py-2 focus:font-bold">Skip to content</a>
        <Nav />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
