// components/CollectionCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Collection } from '@/lib/data';
interface CollectionCardProps {
    collection: Collection;
}
export default function CollectionCard({ collection }: CollectionCardProps) {
    return (
        <Link href={`/collections/${collection.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden
hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                    <Image
                        src={collection.coverImageUrl}
                        alt={collection.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                        {collection.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{collection.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-gray-500">
                            {collection.destinations.length} destinations
                        </span>
                        <span className="text-sm text-gray-500">
                            {new Date(collection.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
