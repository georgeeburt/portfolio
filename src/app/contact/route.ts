import { NextRequest } from 'next/server';
import { EmailService } from '@/lib/services/email';

async function verifyRecaptcha(token: string) {
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    }
  );

  const data = await response.json();
  return data.success;
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const { name, email, message, recaptchaToken } =
      await request.json();

    if (!name || !email || !message || !recaptchaToken) {
      return new Response(
        JSON.stringify({
          message:
            'Name, email, message, and verification are all required'
        }),
        { status: 400 }
      );
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return new Response(
        JSON.stringify({ message: 'Verification failed' }),
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
