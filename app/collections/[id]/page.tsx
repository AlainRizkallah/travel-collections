import { collections, Collection } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CollectionDetailPageProps {
  params: { id: string };
}

// Fetch collection data based on the ID
function getCollectionById(id: string): Collection | undefined {
  return collections.find((collection) => collection.id === id);
}

export default function CollectionDetailPage({ params }: CollectionDetailPageProps) {
  const collection = getCollectionById(params.id);

  if (!collection) {
    return notFound(); // Show Next.js 404 page if collection not found
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{collection.title}</h1>
        <p className="text-gray-600 mt-2">{collection.description}</p>
        <Image
          src={collection.coverImageUrl}
          alt={collection.title}
          width={1200}
          height={500}
          className="rounded-lg mt-4 object-cover w-full h-[300px]"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collection.destinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={destination.imageUrl}
                alt={destination.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{destination.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{destination.description}</p>
              <p className="text-gray-500 text-sm mt-2">
                📍 {destination.location.city}, {destination.location.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
