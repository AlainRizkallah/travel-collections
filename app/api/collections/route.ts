// app/api/collections/route.ts
import { NextResponse } from 'next/server';
import { Collection, collections } from '@/lib/data'; // Import your data store

export async function GET() {
    try {
        return NextResponse.json(collections);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch collections' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate the request body
        if (!body.title || !body.coverImageUrl) {
            return NextResponse.json(
                { error: 'Title and cover image are required' },
                { status: 400 }
            );
        }

        // Ensure destinations array is valid
        if (!Array.isArray(body.destinations)) {
            return NextResponse.json(
                { error: "Destinations must be an array" },
                { status: 400 }
            );
        }

        // Generate new collection object
        const newCollection: Collection = {
            id: crypto.randomUUID(), // Unique ID
            title: body.title,
            description: body.description || "",
            coverImageUrl: body.coverImageUrl,
            createdAt: new Date().toISOString(),
            destinations: body.destinations.map((dest: any) => ({
                id: crypto.randomUUID(),
                name: dest.name,
                imageUrl: dest.imageUrl,
                description: dest.description,
                location: {
                    city: dest.city,
                    country: dest.country,
                },
            })),
        };

        // Add to the in-memory database
        collections.push(newCollection);

        return NextResponse.json(newCollection, { status: 201 });
    } catch (error) {
        console.error("Error creating collection:", error);
        return NextResponse.json(
            { error: 'Failed to create collection' },
            { status: 500 }
        );
    }
}
