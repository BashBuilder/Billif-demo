import { sendSlackMessage } from "@/lib/api-request";
<<<<<<< HEAD
import { kv } from "@vercel/kv";
=======
>>>>>>> anthony-dev
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
<<<<<<< HEAD
    const key = `user:waitlist`;

    await kv.hmset(key, body);
=======

>>>>>>> anthony-dev
    await sendSlackMessage(body);

    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
