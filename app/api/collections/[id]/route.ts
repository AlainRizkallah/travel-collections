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

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const index = collections.findIndex((c) => c.id === params.id);

        if (index === -1) {
            return NextResponse.json({ error: "Collection not found" }, { status: 404 });
        }

        // Remove collection from the array
        collections.splice(index, 1);

        return NextResponse.json({ message: "Collection deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete collection' },
            { status: 500 }
        );
    }
}
