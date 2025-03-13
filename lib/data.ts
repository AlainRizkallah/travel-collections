// lib/data.ts
export interface Destination {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    location: {
        city: string;
        country: string;
    };
}
export interface Collection {
    id: string;
    title: string;
    description: string;
    coverImageUrl: string;
    createdAt: string;
    destinations: Destination[];
}
// In-memory data store
export let collections: Collection[] = [
    {
        id: "1",
        title: "European Getaways",
        description: "My favorite destinations across Europe",
        coverImageUrl: "https://images.unsplash.com/photo-1668640019831-072823bc0ce1",
    createdAt: "2023-05-15T10:30:00Z",
        destinations: [
            {
                id: "101",
                name: "Paris",
                imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
    description: "The city of love and lights",
                location: {
                    city: "Paris",
                    country: "France"
                }
            },
            {
                id: "102",
                name: "Barcelona",
                imageUrl: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e",
    description: "Beautiful architecture and beaches",
                location: {
                    city: "Barcelona",
                    country: "Spain"
                }
            }
        ]
    },
    {
        id: "2",
        title: "Asian Adventures",
        description: "Exploring the diverse cultures of Asia",
        coverImageUrl: "https://images.unsplash.com/photo-1553244687-0646c8e0b68e",
    createdAt: "2023-06-20T14:15:00Z",
        destinations: [
            {
                id: "201",
                name: "Tokyo",
                imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "A blend of traditional and ultramodern",
                location: {
                    city: "Tokyo",
    country: "Japan"
                }
            },
            {
                id: "202",
                name: "Bangkok",
                imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    description: "Vibrant street life and ornate shrines",
                location: {
                    city: "Bangkok",
                    country: "Thailand"
                }
            }
        ]
    }
];