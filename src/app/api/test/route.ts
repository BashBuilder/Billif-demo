import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

function computeSha256Hash(input: string): string {
  return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
}

export async function GET() {
  try {
    // const newDate = DateTime.UtcNow.Date.ToString("yyyyMMdd");
    const newDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const clientid = "QOREPAY SOLUTIONS TECHNOLOGY LTD260525";

    const usernameHash = computeSha256Hash(`${newDate}${clientid}`);
    const passwordHash = computeSha256Hash(clientid);

    return NextResponse.json(
      {
        message: "Data saved successfully",
        date: newDate,
        clientid,
        usernameHash,
        passwordHash,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
