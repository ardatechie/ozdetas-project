"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  title: string;
  image: string;
};

export default function ProductSlider({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  // Ürünleri 2 gruba ayır (üst ve alt sıra için)
  const firstRow = products.slice(0, Math.ceil(products.length / 2));
  const secondRow = products.slice(Math.ceil(products.length / 2));

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center">Öne Çıkan Ürünler</h2>

      <div className="mt-8 overflow-hidden">
        {/* Üst Satır - Sağa Kayar */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: false,
          }}
          speed={5000} // Hızlı ve pürüzsüz bir kayma için
          loop={true}
          allowTouchMove={false} // Kullanıcının kaydırmasını engelle
        >
          {firstRow.concat(firstRow).map((product, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Link href={`/products/${product._id}`} className="block text-center">
                <div className="p-4">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover rounded-md shadow-md"
                  />
                  <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Alt Satır - Sola Kayar */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: false,
            reverseDirection: true, // Alt satırı ters yönde hareket ettir
          }}
          speed={5000}
          loop={true}
          allowTouchMove={false}
        >
          {secondRow.concat(secondRow).map((product, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Link href={`/products/${product._id}`} className="block text-center">
                <div className="p-4">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover rounded-md shadow-md"
                  />
                  <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tüm Ürünleri Görüntüleme Butonu */}
      <div className="mt-10 text-center">
        <Link href="/products">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Tüm Ürünleri Keşfet
          </button>
        </Link>
      </div>
    </section>
  );
}