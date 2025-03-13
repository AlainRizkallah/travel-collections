// app/api/collections/route.ts
import { NextResponse } from 'next/server';
import { collections } from '@/lib/data'; // Import your data store

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

        // Create a new collection
        const newCollection = {
            id: Date.now().toString(), // Simple ID generation
            title: body.title,
            description: body.description || '',
            coverImageUrl: body.coverImageUrl,
            createdAt: new Date().toISOString(),
            destinations: body.destinations || []
        };

        // Add to collections
        collections.push(newCollection);

        return NextResponse.json(newCollection, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create collection' },
            { status: 500 }
        );
    }
}
