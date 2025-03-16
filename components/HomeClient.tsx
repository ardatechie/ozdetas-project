"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProductSlider from "@/components/ProductSlider";
import ReferencesSection from "@/components/ReferencesSection";

interface Product {
  _id: string;
  title: string;
  image: string;
  price?: number;
}

interface HomeClientProps {
  products: Product[];
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const imageFadeIn = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1 },
};

export default function HomeClient({ products }: HomeClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

  // Otomatik slider geçişi ekleme
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      <SEO
        title="Doğal Taş Dekorasyonu | Kaliteli ve Estetik Çözümler"
        description="Zarafet, dayanıklılık ve doğallık bir arada. Mekanlarınıza eşsiz bir dokunuş katın."
      />

      <section className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            key={currentIndex}
            variants={imageFadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt="Doğal Taş Dekorasyonu - Kaliteli Çözümler"
              fill
              priority
              className="object-cover opacity-90"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 px-6 text-center">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ duration: 1, ease: "easeOut" }}>
            <Image src="/logo.png" alt="Firma Logosu" width={256} height={100} />
          </motion.div>
          <motion.p
            className="mt-4 text-lg md:text-2xl max-w-3xl font-light tracking-wide"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
          >
            Zarafet, dayanıklılık ve doğallık bir arada. Mekanlarınıza eşsiz bir dokunuş katın.
          </motion.p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <ProductSlider products={products} />
      </motion.div>

      <ReferencesSection />
    </div>
  );
}
