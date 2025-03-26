import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ozdetas.com.tr"),
  title: "Doğal Taş Dekorasyonu | Kaliteli Doğal Taş Ürünleri",
  description: "Doğal taş dekorasyon ürünleri ile mekanlarınıza doğal bir dokunuş katın.",
  keywords: "doğal taş, mermer, granit, oniks, dekorasyon, özdetaş",
  openGraph: {
    title: "Doğal Taş Dekorasyonu",
    description: "Doğal taş dekorasyon ürünleri ile yaşam alanlarınızı güzelleştirin.",
    url: "https://ozdetas.com.tr",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Doğal Taş Dekorasyonu",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doğal Taş Dekorasyonu",
    description: "Doğal taş dekorasyon ürünleri ile mekanlarınıza doğal bir dokunuş katın.",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {/* Schema.org JSON-LD yapısı */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Özdetaş",
              "url": "https://ozdetas.com.tr",
              "logo": "https://ozdetas.com.tr/logo.png",
              "sameAs": [
                "https://www.instagram.com/ozdetas", // varsa güncel linklerle değiştir
                "https://www.facebook.com/ozdetas"
              ]
            }),
          }}
        />
      </head>
      <body className={`${merriweather.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 w-full p-0 mt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}