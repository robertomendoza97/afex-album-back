import { Module } from '@nestjs/common';
import { VideosModule } from './videos/videos.module';
import { ConfigModule } from '@nestjs/config';
import { DyanmoDBModule } from './db/dynamo/DynamoDBModule.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), DyanmoDBModule, VideosModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
