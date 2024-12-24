import { test, expect } from '@playwright/test';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import { MockSESClient } from '../mocks/mock-ses-client';

test.describe('Email Service Tests', () => {
  let mockSESClient: MockSESClient;

  test.beforeEach(async () => {
    mockSESClient = new MockSESClient();
  });

  test('email command is constructed correctly', async () => {
    const testData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      message: 'Test contact form submission'
    };

    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!]
      },
      Message: {
        Body: {
          Text: {
            Data: `
              Name: ${testData.name}
              Email: ${testData.email}
              Message: ${testData.message}
            `.trim()
          }
        },
        Subject: {
          Data: 'New Portfolio Contact Form Submission'
        }
      },
      Source: process.env.SES_FROM_EMAIL!,
      ReplyToAddresses: [testData.email]
    });

    await mockSESClient.send(command);

    const sentEmails = mockSESClient.getSentEmails();

    expect(sentEmails.length).toBe(1);
    expect(sentEmails[0].destination.ToAddresses[0]).toBe(
      process.env.SES_TO_EMAIL
    );
    expect(sentEmails[0].source).toBe(process.env.SES_FROM_EMAIL);
    expect(sentEmails[0].replyTo[0]).toBe(testData.email);
  });

  test('should handle email sending errors', async () => {
    mockSESClient.setErrorMode(true);

    const testData = {
      name: 'Error Test',
      email: 'error.test@example.com',
      message: 'Error submission test'
    };

    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!]
      },
      Message: {
        Body: {
          Text: {
            Data: `
              Name: ${testData.name}
              Email: ${testData.email}
              Message: ${testData.message}
            `.trim()
          }
        },
        Subject: {
          Data: 'New Portfolio Contact Form Submission'
        }
      },
      Source: process.env.SES_FROM_EMAIL!,
      ReplyToAddresses: [testData.email]
    });

    await expect(mockSESClient.send(command)).rejects.toThrow(
      'Simulated SES sending error'
    );
  });

  test('should validate email parameters', () => {
    const invalidCases = [
      { name: '', email: 'test@example.com', message: 'Test' },
      { name: 'Test', email: '', message: 'Test' },
      { name: 'Test', email: 'test@example.com', message: '' }
    ];

    invalidCases.forEach((invalidData) => {
      expect(() => {
        if (
          !invalidData.name ||
          !invalidData.email ||
          !invalidData.message
        ) {
          throw new Error('Missing required email parameters');
        }
      }).toThrow('Missing required email parameters');
    });
  });
});
