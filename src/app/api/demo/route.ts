import { sendSlackMessage } from "@/lib/api-request";
import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const key = `user:demo`;
    await kv.hmset(key, body);
    await sendSlackMessage(body);
    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
