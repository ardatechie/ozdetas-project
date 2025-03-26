"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

type Stone = {
  _id: string;
  title: string;
  image: string;
  description?: string;
  category?: string;
};

const StoneCard = ({ stone, isFeatured = false }: { stone: Stone; isFeatured?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`group relative h-full ${isFeatured ? 'row-span-2 col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/stones/${stone._id}`}>
        <div className="relative overflow-hidden rounded-2xl h-full bg-gray-100">
          <div className={`${isFeatured ? 'aspect-[4/3]' : 'aspect-square'} w-full relative`}>
            <Image
              src={stone.image}
              alt={stone.title}
              fill
              className={`object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
          <div className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
            <span className="text-white text-lg font-medium block">
              {stone.title}
            </span>
            {stone.category && (
              <span className="text-white/80 text-sm mt-1 block">
                {stone.category}
              </span>
            )}
            <span className="text-white/80 text-sm mt-2 block">
              Detayları İncele →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function StoneCatalogueShowcase({ stones }: { stones: Stone[] }) {
  const [currentSet, setCurrentSet] = useState(0);
  const stonesPerSet = 6;
  const totalSets = Math.ceil(stones.length / stonesPerSet);

  if (stones.length === 0) return null;

  const currentStones = stones.slice(
    currentSet * stonesPerSet,
    (currentSet + 1) * stonesPerSet
  );

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Doğal Taş Koleksiyonu
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Benzersiz dokular ve dayanıklı yapılarıyla öne çıkan doğal taş çeşitlerimizi keşfedin
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentSet}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {currentStones.map((stone, index) => (
              <motion.div
                key={stone._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800"
              >
                <Image
                  src={stone.image}
                  alt={stone.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-0">
                  <h3 className="text-lg font-medium text-white text-center">
                    {stone.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {totalSets > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              {Array.from({ length: totalSets }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSet(index)}
                  className={`group relative py-2 ${
                    currentSet === index ? "px-6" : "px-2"
                  }`}
                >
                  <span className={`block h-2 rounded-full transition-all duration-300 ${
                    currentSet === index
                      ? "w-12 bg-blue-500"
                      : "w-2 bg-gray-600 group-hover:bg-gray-500"
                  }`} />
                  <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 transform -translate-y-2 transition-all duration-300 ${
                    currentSet === index ? "opacity-100 translate-y-0" : ""
                  }`}>
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <div
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-xl cursor-not-allowed opacity-75"
          >
            Tüm Taş Koleksiyonunu İnceleyin
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
          </div>
        </div>
      </div>
    </section>
  );
} 