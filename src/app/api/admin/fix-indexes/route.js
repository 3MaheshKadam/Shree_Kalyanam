import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();

        // Drop the problematic email index
        // Note: It might be named 'email_1'

        const collection = User.collection;

        try {
            await collection.dropIndex('email_1');
            console.log('Dropped email_1 index');
        } catch (e) {
            console.log('Index might not exist or already dropped:', e.message);
        }

        return NextResponse.json({ message: 'Attempted to fix indexes. Please restart the app or try looking in/registering again.' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
