import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { ToastProvider } from "@/context/ToastContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: 'swap',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2e303b",
};

export const metadata: Metadata = {
  title: "ZCB İnşaat & Mühendislik | Kocaeli Darıca Lüks Konut Projeleri",
  description: "Kocaeli Darıca'da estetik detaylar ve sarsılmaz mühendislik prensipleriyle yükselen modern, lüks konut projeleri ve satılık daireler.",
  keywords: ["Kocaeli satılık daire", "Darıca satılık daire", "Lüks konut projesi", "Kocaeli inşaat firmaları", "ZCB İnşaat", "Darıca satılık daire", "ZCB Mühendislik"],
  metadataBase: new URL('https://www.zcbinsaat.com'),
  
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.zcbinsaat.com",
    siteName: "ZCB İnşaat & Mühendislik",
    title: "ZCB İnşaat & Mühendislik | Geleceğin Mimarisini İnşa Ediyoruz",
    description: "Deprem yönetmeliğine tam uyumlu, kaya zemin analizleri yapılmış lüks konut projeleri.",
    images: [
      {
        url: "/assets/about.png",
        width: 1200,
        height: 630,
        alt: "ZCB İnşaat Logo"
      }
    ]
  },

  icons: {
    icon: "/favicon.png",
  },
};

import { client } from "@/sanity/lib/client";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settings = null;
  try {
    settings = await client.fetch(`*[_type == "settings"][0]`);
  } catch (err) {
    console.error("Failed to fetch settings from Sanity:", err);
  }

  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>
          <ToastProvider>
            <Navbar settings={settings} />
            <main id="main-content" className="flex-grow"> 
              {children}
            </main>
            <Footer settings={settings} />
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
