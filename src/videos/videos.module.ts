import { Module } from '@nestjs/common';
import { VideosService } from './services/create-video.service';
import { VideosController } from './controllers/create-video.controller';
import { GettAllvideosController } from './controllers/get-all-videos.controller';
import { GetAllVideosService } from './services/get-all-videos.service';
import { DeleteVideoController } from './controllers/delete-video.controller';
import { DeleteVideoService } from './services/delete-video.service';

@Module({
  controllers: [
    VideosController,
    GettAllvideosController,
    DeleteVideoController,
  ],
  providers: [VideosService, GetAllVideosService, DeleteVideoService],
})
export class VideosModule {}
