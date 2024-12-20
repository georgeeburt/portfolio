import { NextRequest } from 'next/server';

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || message) {
      return new Response(
        JSON.stringify({
          message: 'Name, email and message are all required',
          status: 400,
        })
      );
    }

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending message:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending message' }),
      {
        status: 500,
      }
    );
  }
}
