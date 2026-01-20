import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import Subscription from '@/models/Subscription';

export async function PATCH(req) {
  await connectDB();

  const { userId, planId, razorpay_payment_id } = await req.json();

  if (!userId || !planId || !razorpay_payment_id) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // Find plan details from the Subscription collection
    const plan = await Subscription.findById(planId);
    if (!plan) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 });
    }

    // Calculate expiry date based on plan duration
    const expiresAt = new Date(Date.now() + plan.durationInDays * 24 * 60 * 60 * 1000);

    // Update user's subscription
    // Verify user exists first
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update user's subscription
    user.subscription = {
      plan: plan.name.trim(),
      expiresAt: expiresAt,
      transactionId: razorpay_payment_id,
      subscriptionId: planId,
      isSubscribed: true,
    };

    const updatedUser = await user.save();





    return NextResponse.json({ message: "Subscription updated", user: updatedUser }, { status: 200 });
  } catch (err) {
    console.error("Subscription update error:", err);
    return NextResponse.json({ error: "Something went wrong", details: err.message }, { status: 500 });
  }
}
