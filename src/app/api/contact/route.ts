import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const payload = {
      ...body,
      type: "Billif-contact",
    };

    const baseUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL || "";
    const queryParams = encodeURIComponent(JSON.stringify(payload));
    const url = `${baseUrl}?data=${queryParams}`;

    console.log("url", url);

    await fetch(url);

    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
