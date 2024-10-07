import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // const { searchParams } = new URL(req.url);
    // const phoneNumber = searchParams.get("phoneNumber");

    // if (!phoneNumber) {
    //   throw new Error("Phone number is missing in the query parameters");
    // }

    const key = `user:contact`;
    const user = await kv.hgetall(key);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body || typeof body !== "object") {
      throw new Error("Invalid request body");
    }

    const key = `user:contact`;

    await kv.hmset(key, body);
    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
