// app/api/deepseek/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  // Call DeepSeek API v1
  const response = await fetch("https://api.deepseek.com/v1/endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
