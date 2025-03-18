import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { references } from "@/data/references";

export default function ReferencesSection() {
  const [selectedReference, setSelectedReference] = useState(references[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  
  const referencesPerPage = 8;
  const totalPages = Math.ceil(references.length / referencesPerPage);
  
  const displayedReferences = references.slice(
    currentPage * referencesPerPage,
    (currentPage + 1) * referencesPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Referanslarımız
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Tamamladığımız projelerden örnekler
          </p>
        </motion.div>

        {/* Featured Reference */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[21/9] rounded-2xl overflow-hidden"
          >
            <Image
              src={selectedReference.image}
              alt="Featured Reference"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedReference.title}
                </h3>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center px-6 py-3 text-sm md:text-base font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300"
                >
                  Tüm Projelerimizi İnceleyin
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
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedReferences.map((reference, index) => (
            <motion.div
              key={reference._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedReference(reference)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src={reference.image}
                  alt={reference.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Full References Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
            >
              <div className="min-h-screen px-4 py-16">
                <div className="max-w-7xl mx-auto">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold text-white">
                      Tüm Projelerimiz
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {references.map((reference, index) => (
                      <motion.div
                        key={reference._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="group cursor-pointer"
                        onClick={() => {
                          setSelectedReference(reference);
                          setIsModalOpen(false);
                        }}
                      >
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800">
                          <Image
                            src={reference.image}
                            alt={reference.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-end p-4">
                            <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white font-medium text-sm">
                                {reference.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}