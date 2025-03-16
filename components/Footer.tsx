import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Şirket Bilgileri */}
        <div>
          <h2 className="text-xl font-semibold text-white">Özdetaş</h2>
          <p className="mt-2 text-gray-400">
            Doğal taş dekorasyon ürünlerinde kaliteyi ve estetiği bir araya getiriyoruz.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Menü Bağlantıları */}
        <div>
          <h3 className="text-lg font-semibold text-white">Bağlantılar</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
            <li><Link href="/products" className="hover:text-white">Ürünler</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projeler</Link></li>
            <li><Link href="/about" className="hover:text-white">Hakkımızda</Link></li>
            <li><Link href="/contact" className="hover:text-white">İletişim</Link></li>
          </ul>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h3 className="text-lg font-semibold text-white">İletişim</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center"><MapPin size={18} className="mr-2" /> Aydın, Türkiye</li>
            <li className="flex items-center"><Phone size={18} className="mr-2" /> +90 536 847 20 24</li>
          </ul>
        </div>
      </div>

      {/* Alt Kısım (Copyright) */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-6">
        <p>© 2025 Özdetaş | Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}