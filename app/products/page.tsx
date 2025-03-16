// app/products/page.tsx (Server Component)
import ProductsList from "@/components/ProductsList";
import { Metadata } from "next";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Ürünlerimiz - Şirket Adı",
  description: "En kaliteli ürünlerimizi keşfedin. Şimdi inceleyin!",
};

export default function ProductsPage() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {products && products.length > 0 ? (
          <ProductsList products={products} />
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold uppercase tracking-wide">Ürünlerimiz</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Şu anda ürün bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
