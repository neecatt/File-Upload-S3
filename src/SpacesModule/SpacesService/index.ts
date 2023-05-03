// index.ts
import * as AWS from 'aws-sdk';
import { Provider } from '@nestjs/common';

// Unique identifier of the service in the dependency injection layer
export const DoSpacesServiceLib = 'lib:do-spaces-service';

// Creation of the value that the provider will always be returning.
// An actual AWS.S3 instance
const spacesEndpoint = new AWS.Endpoint('fra1.digitaloceanspaces.com');

const S3 = new AWS.S3({
  endpoint: spacesEndpoint.href,
  credentials: new AWS.Credentials({
    accessKeyId: 'DO00MVL4EJ73AGZPX974',
    secretAccessKey: '+44xWN7bOrs0aame39jow9vGRXmHYgIM5Xfrl1mfkEk',
  }),
});

// Now comes the provider
export const DoSpacesServicerovider: Provider<AWS.S3> = {
  provide: DoSpacesServiceLib,
  useValue: S3,
};

// This is just a simple interface that represents an uploaded file object
export interface UploadedMulterFileI {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
