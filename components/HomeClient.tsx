"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import StoneCatalogueShowcase from "./StoneCatalogueShowcase";
import ReferencesSection from "./ReferencesSection";
import PartnersSection from "./PartnersSection";
import Link from "next/link";

interface Stone {
  _id: string;
  title: string;
  image: string;
  description?: string;
  category?: string;
}

interface HomeClientProps {
  stones: Stone[];
}

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeClient({ stones }: HomeClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      <SEO
        title="Doğal Taş Dekorasyonu | Kaliteli ve Estetik Çözümler"
        description="Zarafet, dayanıklılık ve doğallık bir arada. Mekanlarınıza eşsiz bir dokunuş katın."
      />

      {/* Simplified Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-900">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white space-y-6 md:space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Doğal Taşın<br />
                <span className="text-blue-400">Gücü</span> ve{" "}
                <span className="text-blue-400">Estetiği</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Yıllardır edindiğimiz tecrübe ve uzmanlıkla, doğal taşın benzersiz dokusunu 
                modern tasarımlarla buluşturuyoruz. Her projemizde kalite ve estetik anlayışımızı 
                yansıtıyor, mekanlarınıza değer katıyoruz.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15+</h3>
                  <p className="text-sm md:text-base text-gray-300">Yıllık Deneyim</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</h3>
                  <p className="text-sm md:text-base text-gray-300">Tamamlanan Proje</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-center col-span-2 md:col-span-1 mx-auto md:mx-0"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">20+</h3>
                  <p className="text-sm md:text-base text-gray-300">Taş Çeşidi</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/banner1.jpg"
                  alt="Featured Stone Work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 md:p-6 rounded-xl">
                <p className="text-xl md:text-2xl font-semibold">100%</p>
                <p className="text-xs md:text-sm mt-1">Müşteri Memnuniyeti</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stone Catalogue Section */}
      <StoneCatalogueShowcase stones={stones} />

      {/* Partners Section */}
      <PartnersSection />

      {/* References Section */}
      <ReferencesSection />

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Projeleriniz İçin Yanınızdayız
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Size özel çözümler için hemen iletişime geçin
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300"
            >
              Bizimle İletişime Geçin
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
