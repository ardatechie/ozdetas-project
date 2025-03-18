"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Menü öğelerini tanımla (Görünen isimler Türkçe, linkler İngilizce)
  const menuItems = [
    { label: "Ana Sayfa", path: "/" },
    { label: "Hakkımızda", path: "/about" },
    { label: "Projeler", path: "/projects" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-md ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50" aria-label="Ana Sayfa">
          <Image 
            src="/logo.png" 
            alt="Doğal Taş Dekor" 
            width={140} 
            height={45}
            className={`transition-opacity duration-300 ${
              scrolled ? "opacity-90" : "opacity-100"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map(({ label, path }, index) => (
            <Link 
              key={index} 
              href={path}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gray-100 hover:text-white" : "text-white hover:text-gray-200"
              }`}
            >
              <span className="relative">
                {label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            }`}
          >
            Bize Ulaşın
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-white p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
              {menuItems.map(({ label, path }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={path}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-medium text-white hover:text-gray-200 transition-colors"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Bize Ulaşın
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}