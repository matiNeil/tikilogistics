import { NextResponse } from "next/server";

const REQUIRED_FIELDS = [
  "pickupLocation",
  "deliveryDestination",
  "cargoType",
  "estimatedWeight",
  "collectionDate",
  "fullName",
  "phone",
  "email",
] as const;

export async function POST(request: Request) {
  const body = await request.json();

  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || String(body[field]).trim() === "") {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  console.log("New transport quote request:", body);

  return NextResponse.json({ success: true });
}
