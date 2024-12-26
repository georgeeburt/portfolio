import { NextRequest } from 'next/server';
import { EmailService } from '@/lib/services/email';

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const { name, email, message, recaptchaToken } =
      await request.json();

    if (!name || !email || !message || !recaptchaToken) {
      return new Response(
        JSON.stringify({
          message: 'Name, email, message are all required'
        }),
        { status: 400 }
      );
    }

    await EmailService.sendContactFormEmail({ name, email, message });

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200
    });
  } catch (error) {
    console.error('Error sending message:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending message' }),
      {
        status: 500
      }
    );
  }
}
