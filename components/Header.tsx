"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menü açıkken kaydırmayı engelle
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Menü öğelerini tanımla (Görünen isimler Türkçe, linkler İngilizce)
  const menuItems = [
    { label: "Ana Sayfa", path: "/" },
    { label: "Ürünler", path: "/products" },
    { label: "Hakkımızda", path: "/about" },
    { label: "İletişim", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center h-16 md:h-20">
        
        {/* Logo */}
        <Link href="/" aria-label="Ana Sayfa">
          <Image src="/logo.png" alt="Doğal Taş Dekor" width={140} height={45} />
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          {menuItems.map(({ label, path }, index) => (
            <Link key={index} href={path} className="hover:text-gray-900 transition">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 text-lg text-gray-700 transition-all">
          <button
            className="absolute top-5 right-5 text-gray-700"
            onClick={() => setMenuOpen(false)}
            aria-label="Menüyü Kapat"
          >
            <X size={28} />
          </button>

          {menuItems.map(({ label, path }, index) => (
            <Link
              key={index}
              href={path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-900 transition"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}