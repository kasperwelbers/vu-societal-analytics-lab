import { NextRequest } from "next/server";

export async function GET(req) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret === process.env.GPTSECRET)
    return Response.json({ key: process.env.GPTKEY });
  return Response.json({ error: "wrong secret" });
}
