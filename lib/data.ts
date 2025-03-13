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
        coverImageUrl: "https://images.unsplash.com/photo-1519677100203a0e668c92439",
    createdAt: "2023-05-15T10:30:00Z",
        destinations: [
            {
                id: "101",
                name: "Paris",
                imageUrl: "https://images.unsplash.com/photo-15026028986573e91760cbb34",
    description: "The city of love and lights",
                location: {
                    city: "Paris",
                    country: "France"
                }
            },
            {
                id: "102",
                name: "Barcelona",
                imageUrl: "https://images.unsplash.com/photo-15834224095162895a77efded",
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
        coverImageUrl: "https://images.unsplash.com/photo-1535139262971c51845709a48",
    createdAt: "2023-06-20T14:15:00Z",
        destinations: [
            {
                id: "201",
                name: "Tokyo",
                imageUrl: "https://images.unsplash.com/photo-1503899036084c55cdd92da26",
    description: "A blend of traditional and ultramodern",
                location: {
                    city: "Tokyo",
    country: "Japan"
                }
            },
            {
                id: "202",
                name: "Bangkok",
                imageUrl: "https://images.unsplash.com/photo-150800960388550cf7c8dd0d5",
    description: "Vibrant street life and ornate shrines",
                location: {
                    city: "Bangkok",
                    country: "Thailand"
                }
            }
        ]
    }
];