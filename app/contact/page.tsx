"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full">
      {/* Hero Bölümü */}
      <div className="relative w-full h-[400px]">
      import Image from "next/image";

<Image
  src="/banner.jpg"
  alt="Doğal Taş Dekorasyonu"
  fill
  className="object-cover"
/>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white px-6">
          <motion.h1
            className="text-5xl font-bold uppercase tracking-wide"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            İletişim
          </motion.h1>
        </div>
      </div>

      {/* İletişim İçeriği */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700">
            Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz. Size en kısa sürede geri dönüş yapacağız.
          </p>
        </motion.div>

        {/* İletişim Bilgileri */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adres */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="bg-white shadow-lg p-8 rounded-lg flex flex-col items-center text-center"
          >
            <MapPin size={40} className="text-red-500 mb-4" />
            <h3 className="text-2xl font-medium">Adres</h3>
            <p className="text-gray-600 mt-3">Aydın, Türkiye</p>
          </motion.div>

          {/* Telefon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="bg-white shadow-lg p-8 rounded-lg flex flex-col items-center text-center"
          >
            <Phone size={40} className="text-green-500 mb-4" />
            <h3 className="text-2xl font-medium">Telefon</h3>
            <p className="text-gray-600 mt-3">+90 536 847 20 24</p>
          </motion.div>

          {/* E-Posta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="bg-white shadow-lg p-8 rounded-lg flex flex-col items-center text-center"
          >
          </motion.div>
        </div>

        {/* İletişim Formu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">Bize Ulaşın</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Adınız</label>
              <input type="text" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Adınızı girin" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">E-Posta</label>
              <input type="email" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="E-posta adresinizi girin" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Mesajınız</label>
              <textarea className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Mesajınızı yazın"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition">Gönder</button>
          </form>
        </motion.div>

        {/* Sosyal Medya Linkleri */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">Bizi Takip Edin</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-700 hover:text-blue-900 transition">
              <Facebook size={36} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition">
              <Twitter size={36} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700 transition">
              <Instagram size={36} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}