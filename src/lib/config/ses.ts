import { SESClient } from '@aws-sdk/client-ses';

export const sesClient = new SESClient({
  region: 'eu-west-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET!
  }
});
