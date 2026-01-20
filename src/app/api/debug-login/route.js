
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const phone = searchParams.get('phone'); // e.g. 8668903099

        if (!phone) return NextResponse.json({ error: 'Phone required' });

        const exact = await User.find({ phone: phone }).select('name phone isVerified');
        const withPrefix = await User.find({ phone: `+91${phone}` }).select('name phone isVerified');
        const regex = await User.find({ phone: { $regex: phone } }).select('name phone isVerified createdAt');

        return NextResponse.json({
            checked: phone,
            exact,
            withPrefix,
            regex
        });
    } catch (e) {
        return NextResponse.json({ error: e.message });
    }
}
