// app/api/collections/[id]/route.ts
import { NextResponse } from 'next/server';
import { collections } from '@/lib/data'; // Import your data store

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const collection = collections.find(c => c.id === params.id);

        if (!collection) {
            return NextResponse.json(
                { error: 'Collection not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(collection);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch collection' },
            { status: 500 }
        );
    }
}
