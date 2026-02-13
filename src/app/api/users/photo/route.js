import { NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import User from '@/models/User';

const corsHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:8081',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true'
};

export async function PUT(req) {
    try {
        await connectDB();

        const { userId, url, isPrimary, delete: shouldDelete } = await req.json();

        console.log('Photo update request:', { userId, url, isPrimary, shouldDelete });

        if (!userId) {
            return NextResponse.json(
                { message: 'User ID is required' },
                { status: 400, headers: corsHeaders }
            );
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404, headers: corsHeaders }
            );
        }

        // Initialize photos array if it doesn't exist
        if (!user.photos) {
            user.photos = [];
        }

        if (shouldDelete) {
            // Remove photo from user's photos array
            user.photos = user.photos.filter(p => p.url !== url);

            // If deleted photo was primary, set first photo as primary or null
            if (user.profilePhoto === url) {
                user.profilePhoto = user.photos.length > 0 ? user.photos[0].url : null;
                if (user.photos.length > 0) {
                    user.photos[0].isPrimary = true;
                }
            }
        } else if (isPrimary) {
            // Set all photos to non-primary first
            user.photos.forEach(p => p.isPrimary = false);

            // Find existing photo or add new one
            const existingPhoto = user.photos.find(p => p.url === url);
            if (existingPhoto) {
                existingPhoto.isPrimary = true;
            } else {
                user.photos.push({ url, isPrimary: true });
            }

            // Update profilePhoto
            user.profilePhoto = url;
        } else {
            // Add new photo if it doesn't exist
            const existingPhoto = user.photos.find(p => p.url === url);
            if (!existingPhoto) {
                user.photos.push({ url, isPrimary: false });
            }
        }

        await user.save();

        return NextResponse.json({
            success: true,
            message: 'Photo updated successfully',
            profilePhoto: user.profilePhoto,
            photos: user.photos
        }, { headers: corsHeaders });

    } catch (error) {
        console.error('Error updating photo:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Internal server error',
                error: error.message
            },
            { status: 500, headers: corsHeaders }
        );
    }
}
