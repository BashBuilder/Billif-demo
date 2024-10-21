import { sendSlackMessage } from "@/lib/api-request";
import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const key = `user:demo`;
//     const user = await kv.hgetall(key);

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }
//     return NextResponse.json(user, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 400 });
//   }
// }

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const key = `user:waitlist`;

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
