import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  try {
    const response = await axios.post(
      'https://api.deepseek.com/chat/completions',
      {
        model: 'deepseek-coder',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1024,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        },
      }
    );

    return NextResponse.json(response.data.choices[0].message.content);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch AI response' },
      { status: 500 }
    );
  }
}