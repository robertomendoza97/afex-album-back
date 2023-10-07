import {
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import * as dynamoose from 'dynamoose';
import { ERROR_MESSAGES } from 'src/Shared/error-messages';

@Injectable()
export class DynamoDBService implements OnModuleInit {
  async onModuleInit() {
    this.startDynamoDBConectino();
  }

  startDynamoDBConectino() {
    try {
      const ddb = new dynamoose.aws.ddb.DynamoDB({
        credentials: {
          accessKeyId: process.env.ACCESS_KEY,
          secretAccessKey: process.env.SECRET_ACCESS_KEY,
        },
        region: process.env.AWS_REGION,
      });

      dynamoose.aws.ddb.set(ddb);
    } catch (error) {
      throw new InternalServerErrorException(ERROR_MESSAGES.ERROR_CONNECTION);
    }
  }
}
