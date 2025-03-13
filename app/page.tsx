// app/page.tsx
import { Collection } from '@/lib/data';
import CollectionCard from '@/components/CollectionCard';
async function getCollections(): Promise<Collection[]> {
  // In a real app, you would fetch from your API
  const res = await fetch('http://localhost:3000/api/collections');

  if (!res.ok) {
    throw new Error('Failed to fetch collections');
  }

  return res.json();
}
export default async function Home() {
  const collections = await getCollections();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Travel Collections</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </main>
  );
}