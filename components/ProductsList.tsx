// components/ProductsList.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  _id: string;
  title: string;
  image: string;
};

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Ürünlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.a 
            key={product._id} 
            className="group flex flex-col items-center relative bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Ürün Görseli */}
            <div className="w-full aspect-square relative overflow-hidden">
              <Image 
                src={product.image} 
                alt={`${product.title} - Ürün Görseli`} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                {...(index < 2 ? { priority: true } : { loading: "lazy" })}
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Ürün Adı */}
            <div className="w-full text-center mt-3 p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black">
                {product.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}