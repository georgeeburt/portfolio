import { rateLimiter } from '@/lib/middleware/rate-limiter';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const rateLimitResult = await rateLimiter(request);
    if (rateLimitResult) {
      return rateLimitResult;
    }

    const { name, email, message, honeyPot } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        {
          message: 'Name, email, message are all required'
        },
        { status: 400 }
      );
    }

    if (honeyPot?.trim()) {
      return Response.json(
        {
          message: 'Spam detected'
        },
        { status: 400 }
      );
    }

    if (process.env.NODE_ENV === 'development') {
      return Response.json(
        { message: 'Development Mode' },
        { status: 200 }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: `Burt Software Solutions <${process.env.RESEND_FROM_EMAIL}>`,
        to: [process.env.RESEND_TO_EMAIL],
        subject: 'Enquiry from Burt Software Solutions',
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`
      })
    });

    const data = await res.json();

    if (res.ok) {
      return Response.json(
        { message: 'Success', data },
        {
          status: 200
        }
      );
    } else {
      return Response.json(
        {
          message: 'Failed to send email',
          error: data
        },
        { status: res.status }
      );
    }
  } catch (error) {
    console.error('Error sending message:', error);
    return Response.json(
      { message: 'Error sending message' },
      {
        status: 500
      }
    );
  }
}
