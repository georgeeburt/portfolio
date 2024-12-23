import { SendEmailCommand } from '@aws-sdk/client-ses';

export class MockSESClient {
  private sentEmails: any[] = [];
  private shouldThrowError: boolean = false;

  async send(command: SendEmailCommand) {
    if (this.shouldThrowError) {
      throw new Error('Simulated SES sending error');
    }

    this.sentEmails.push({
      destination: command.input.Destination,
      message: command.input.Message,
      source: command.input.Source,
      replyTo: command.input.ReplyToAddresses
    });

    return { MessageId: 'mock-message-id' };
  }

  getSentEmails() {
    return this.sentEmails;
  }

  clearSentEmails() {
    this.sentEmails = [];
  }

  setErrorMode(shouldError: boolean) {
    this.shouldThrowError = shouldError;
  }
}
