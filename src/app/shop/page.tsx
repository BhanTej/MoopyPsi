import ProductGrid from '@/components/ProductGrid';


export default function ShopPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-600 mb-8">Shop Our Collection</h1>
      <ProductGrid />
    </main>
  );
}