import { Module } from '@nestjs/common';
import { DynamoDBService } from './DynamoDBService.service';

@Module({
  imports: [],
  providers: [DynamoDBService],
  exports: [DynamoDBService],
})
export class DyanmoDBModule {}
