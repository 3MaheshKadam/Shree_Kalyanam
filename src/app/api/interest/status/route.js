import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import Interest from "@/models/Interest";
import User from "@/models/User";

const corsHeaders = {
  'Access-Control-Allow-Origin': 'http://localhost:8081', // Must be explicit, not *
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true'
};

export async function PATCH(req) {
  await connectDB();

  const { interestId, status } = await req.json();
  console.log("Interest ID:", interestId);
  console.log("Status:", status);

  if (!interestId || !["accepted", "declined"].includes(status)) {
    return NextResponse.json({ message: "Invalid input" }, { status: 400, headers: corsHeaders });
  }

  const interest = await Interest.findById(interestId);
  if (!interest) {
    return NextResponse.json({ message: "Interest not found" }, { status: 404, headers: corsHeaders });
  }

  interest.status = status;

  // If accepted, enable contact sharing
  if (status === 'accepted') {
    interest.contactShared = true;
  }

  await interest.save();

  // Fetch sender and receiver details with contact info if accepted
  let responseData = {
    success: true,
    message: "Status updated",
    interest
  };

  if (status === 'accepted') {
    const sender = await User.findById(interest.senderId).select('name phone email profilePhoto');
    const receiver = await User.findById(interest.receiverId).select('name phone email profilePhoto');

    responseData.contactShared = true;
    responseData.senderContact = {
      name: sender.name,
      phone: sender.phone,
      email: sender.email,
      profilePhoto: sender.profilePhoto
    };
    responseData.receiverContact = {
      name: receiver.name,
      phone: receiver.phone,
      email: receiver.email,
      profilePhoto: receiver.profilePhoto
    };
  }

  return NextResponse.json(responseData, { headers: corsHeaders });
}
// This route updates the status of an interest (accepted or declined).