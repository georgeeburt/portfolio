import { SendEmailCommand } from '@aws-sdk/client-ses';
import { sesClient } from '../config/ses';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export class EmailService {
  private static readonly FROM_EMAIL = process.env.SES_FROM_EMAIL!;
  private static readonly TO_EMAIL = process.env.SES_TO_EMAIL!;

  static async sendContactFormEmail(data: ContactFormData) {
    const { name, email, message } = data;

    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: [this.TO_EMAIL]
      },
      Message: {
        Body: {
          Text: {
            Data: `
Name: ${name}
Email: ${email}
Message: ${message}
            `.trim()
          }
        },
        Subject: {
          Data: 'New Portfolio Contact Form Submission'
        }
      },
      Source: this.FROM_EMAIL,
      ReplyToAddresses: [email]
    });

    return sesClient.send(command);
  }
}
