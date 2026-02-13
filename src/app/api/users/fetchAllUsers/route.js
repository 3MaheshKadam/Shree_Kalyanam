// This file handles the API route for fetching all users with pagination and filtering
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/User'; // Assuming your User model is imported from here
import connectDB from '@/lib/dbConnect';
// Connect to MongoDB if not already connected
const corsHeaders = {
  'Access-Control-Allow-Origin': 'http://localhost:8081', // Must be explicit, not *
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true'
};

export async function GET(request) {
  try {
    await connectDB();

    // Get query parameters for potential filtering
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId'); // Get requesting user ID
    const limit = searchParams.get('limit') || 20;
    const page = searchParams.get('page') || 1;
    const skip = (page - 1) * limit;

    // Check subscription status
    if (userId) {
      const requestingUser = await User.findById(userId).select('subscription');

      if (!requestingUser) {
        return NextResponse.json(
          { success: false, message: 'User not found', requiresSubscription: true },
          { status: 404, headers: corsHeaders }
        );
      }

      // Check if user has active subscription
      const isSubscribed = requestingUser.subscription?.isSubscribed || false;
      const subscriptionExpired = requestingUser.subscription?.expiresAt
        ? new Date(requestingUser.subscription.expiresAt) < new Date()
        : true;

      // If not subscribed, we still return data but the frontend will blur it
      // The phone/email are already excluded below
      // if (!isSubscribed || subscriptionExpired) {
      //   // Allow access but frontend will handle the UI restrictions
      // }
    }

    // Basic query - you can extend this with more filters as needed
    const query = {};

    // Optional: Add filters based on query parameters
    if (searchParams.get('isVerified')) {
      query.isVerified = searchParams.get('isVerified') === 'true';
    }

    if (searchParams.get('verificationStatus')) {
      query.verificationStatus = searchParams.get('verificationStatus');
    }



    if (searchParams.get('gender')) {
      query.gender = searchParams.get('gender');
    }

    // --- NEW FILTERS ---

    // City (Partial Match)
    const city = searchParams.get('city');
    if (city) {
      query.currentCity = { $regex: city, $options: 'i' };
    }

    // Caste (Partial Match)
    const caste = searchParams.get('caste');
    if (caste) {
      query.caste = { $regex: caste, $options: 'i' };
    }

    // Marital Status (Exact Match)
    const maritalStatus = searchParams.get('maritalStatus');
    if (maritalStatus) {
      query.maritalStatus = maritalStatus;
    }

    // Age Range
    const minAge = parseInt(searchParams.get('minAge'));
    const maxAge = parseInt(searchParams.get('maxAge'));

    if (!isNaN(minAge) || !isNaN(maxAge)) {
      query.dob = {};
      const today = new Date();

      if (!isNaN(minAge)) {
        const maxDob = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
        query.dob.$lte = maxDob;
      }

      if (!isNaN(maxAge)) {
        const minDob = new Date(today.getFullYear() - maxAge - 1, today.getMonth(), today.getDate());
        query.dob.$gte = minDob;
      }
    }

    // Income (Exact Match)
    const income = searchParams.get('income');
    if (income) {
      query.income = income;
    }

    // Education (Exact Match)
    const education = searchParams.get('education');
    if (education) {
      query.education = education;
    }

    // Fetch users with pagination (exclude contact info for privacy)
    const users = await User.find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v -phone -email') // Exclude contact info and version key
      .lean(); // Convert to plain JavaScript objects

    // Get total count for pagination info
    const total = await User.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: users,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    }, { headers: corsHeaders });

  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch users', error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}