import { motion } from "framer-motion";
import Image from "next/image";
import { references } from "../data/references";

export default function ReferencesSection() {
  return (
    <section className="w-full py-16 bg-gray-50 flex justify-center">
      <div className="max-w-6xl w-full px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Çalışmalarımız
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Gerçekleştirdiğimiz projelerden bazılarını aşağı kaydırarak keşfedin.
        </p>

        <div className="mt-10 overflow-y-auto h-[500px] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {references.map((ref) => (
              <motion.div
                key={ref._id}
                className="rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={ref.image || "/fallback-image.jpg"}
                  alt={ref.title || "Referans görseli"}
                  width={300}
                  height={200}
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}