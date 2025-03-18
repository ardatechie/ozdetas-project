import { motion } from "framer-motion";
import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Çözüm Ortaklarımız</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Güvenilir iş ortaklarımızla birlikte sizlere en kaliteli hizmeti sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <motion.div
              key={partner._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={150}
                height={80}
                className="object-contain h-20"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 