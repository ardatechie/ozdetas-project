"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Leaf, Star, Award, Globe, Users, ChevronRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="Hakkımızda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Doğal Taşın Sanatı
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hakkımızda
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Doğanın en değerli hazinelerini modern tasarımlarla buluşturuyoruz
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/about-image.jpg"
                  alt="Hikayemiz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Yıllık Deneyim</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Hikayemiz</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Yılların verdiği tecrübe ile doğal taş sektöründe kaliteyi, estetiği ve dayanıklılığı bir araya getiriyoruz.
                Modern teknolojilerle işlediğimiz taşlarımız, doğanın eşsiz dokusunu mekanlarınıza taşırken, çevre dostu
                üretim anlayışımız ile sürdürülebilir bir gelecek için çalışıyoruz.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kalite</h3>
                    <p className="text-sm text-gray-600">En yüksek standartlar</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sürdürülebilirlik</h3>
                    <p className="text-sm text-gray-600">Çevre dostu üretim</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                <p className="text-gray-600">
                  Doğadan ilham alarak, en kaliteli ve dayanıklı taşları sunarak yaşam alanlarınıza değer katmak.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                <p className="text-gray-600">
                  Estetiği ve fonksiyonelliği bir araya getirerek sürdürülebilir üretim anlayışımızla sektörde öncü olmak.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/about-image-2.jpg"
                  alt="Vizyon ve Misyon"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Temel Değerlerimiz</h2>
            <p className="text-lg text-gray-600">
              Müşterilerimize en iyi hizmeti sunmak için benimsediğimiz değerler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-yellow-500" />,
                title: "Mükemmellik",
                text: "Ürünlerimizde en üst düzey kaliteyi sunuyoruz.",
                color: "yellow"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
                title: "Güvenilirlik",
                text: "Müşterilerimizle güvene dayalı iş ilişkileri kuruyoruz.",
                color: "blue"
              },
              {
                icon: <Leaf className="w-8 h-8 text-green-500" />,
                title: "Sürdürülebilirlik",
                text: "Çevreye duyarlı üretim anlayışı ile çalışıyoruz.",
                color: "green"
              },
              {
                icon: <Award className="w-8 h-8 text-purple-500" />,
                title: "İnovasyon",
                text: "Teknolojiyi kullanarak en yenilikçi çözümleri üretiyoruz.",
                color: "purple"
              },
              {
                icon: <Globe className="w-8 h-8 text-red-500" />,
                title: "Küresel Bakış Açısı",
                text: "Dünya çapında tanınan bir marka olma hedefiyle ilerliyoruz.",
                color: "red"
              },
              {
                icon: <Users className="w-8 h-8 text-gray-500" />,
                title: "Müşteri Odaklılık",
                text: "Müşterilerimizin ihtiyaçlarını her zaman ön planda tutuyoruz.",
                color: "gray"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-${item.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}