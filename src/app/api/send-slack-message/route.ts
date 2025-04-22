// import { slackLinks } from "@/data/links";
// import { sendSlackMessage } from "@/lib/api-request";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const payload = {
      ...body,
      type: "nextgen-demo-tour",
    };

    const baseUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL || "";
    const queryParams = JSON.stringify(payload);
    const url = `${baseUrl}?data=${queryParams}`;

    await fetch(url);

    // await sendSlackMessage(body, slackLinks.demoTour);

    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
