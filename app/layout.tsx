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
  metadataBase: new URL("https://ozdetas.com.tr"), // Replace with your actual domain
  title: "Doğal Taş Dekorasyonu | Kaliteli Doğal Taş Ürünleri",
  description: "Doğal taş dekorasyon ürünleri ile mekanlarınıza doğal bir dokunuş katın.",
  keywords: "doğal taş, mermer, granit, oniks, dekorasyon",
  openGraph: {
    title: "Doğal Taş Dekorasyonu",
    description: "Doğal taş dekorasyon ürünleri ile yaşam alanlarınızı güzelleştirin.",
    url: "https://yourdomain.com", // Ensure Open Graph URL is absolute
    images: [
      {
        url: "/banner.jpg", // This will now resolve to "https://yourdomain.com/banner.jpg"
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
    images: ["/banner.jpg"], // Resolves correctly with metadataBase
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${merriweather.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 w-full p-0 mt-[80px]">{children}</main> {/* 80px boşluk verdik */}
        <Footer />
      </body>
    </html>
  );
}