"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Leaf, Star, Award, Globe, Users } from "lucide-react";

export default function About() {
  return (
    <section className="w-full">
      {/* Hero Bölümü */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/about-hero.jpg"
          alt="Hakkımızda"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white px-4 md:px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold uppercase tracking-wide"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hakkımızda
          </motion.h1>
        </div>
      </div>

      {/* İçerik Bölümü */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Doğal Taşın Sanata Dönüşen Hikayesi</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Yılların verdiği tecrübe ile doğal taş sektöründe kaliteyi, estetiği ve dayanıklılığı bir araya getiriyoruz.
            Modern teknolojilerle işlediğimiz taşlarımız, doğanın eşsiz dokusunu mekanlarınıza taşırken, çevre dostu
            üretim anlayışımız ile sürdürülebilir bir gelecek için çalışıyoruz.
          </p>
        </motion.div>

        {/* Vizyon & Misyon */}
        <div className="relative mt-16 flex flex-col md:flex-row items-center px-4 md:px-6 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-full max-w-full md:max-w-5xl relative"
          >
            <Image
              src="/about-image.jpg"
              alt="Vizyonumuz"
              width={1100}
              height={650}
              className="rounded-xl shadow-2xl object-cover w-full"
            />
          </motion.div>

          {/* Metin Bloğu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-full md:w-[50%] bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl text-white shadow-lg"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Vizyonumuz</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Doğadan ilham alarak, en kaliteli ve dayanıklı taşları sunarak yaşam alanlarınıza değer katmak.
            </p>
            <div className="h-1 w-24 bg-yellow-500 my-6"></div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Misyonumuz</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Estetiği ve fonksiyonelliği bir araya getirerek sürdürülebilir üretim anlayışımızla sektörde öncü olmak.
            </p>
          </motion.div>
        </div>

        {/* Değerlerimiz Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Temel Değerlerimiz</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: <Star size={40} className="text-yellow-500 mb-4" />, title: "Mükemmellik", text: "Ürünlerimizde en üst düzey kaliteyi sunuyoruz."
          }, {
            icon: <ShieldCheck size={40} className="text-blue-500 mb-4" />, title: "Güvenilirlik", text: "Müşterilerimizle güvene dayalı iş ilişkileri kuruyoruz."
          }, {
            icon: <Leaf size={40} className="text-green-500 mb-4" />, title: "Sürdürülebilirlik", text: "Çevreye duyarlı üretim anlayışı ile çalışıyoruz."
          }, {
            icon: <Award size={40} className="text-purple-500 mb-4" />, title: "İnovasyon", text: "Teknolojiyi kullanarak en yenilikçi çözümleri üretiyoruz."
          }, {
            icon: <Globe size={40} className="text-red-500 mb-4" />, title: "Küresel Bakış Açısı", text: "Dünya çapında tanınan bir marka olma hedefiyle ilerliyoruz."
          }, {
            icon: <Users size={40} className="text-gray-500 mb-4" />, title: "Müşteri Odaklılık", text: "Müşterilerimizin ihtiyaçlarını her zaman ön planda tutuyoruz."
          }].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 + index * 0.1 }}
              className="bg-white shadow-lg p-6 md:p-8 rounded-lg flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-xl md:text-2xl font-medium">{item.title}</h3>
              <p className="text-gray-600 mt-3 text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}