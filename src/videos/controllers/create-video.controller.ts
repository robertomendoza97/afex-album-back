import { Controller, Post, Param } from '@nestjs/common';
import { VideosService } from '../services/create-video.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post(':videoId')
  saveVideo(@Param('videoId') videoId: string) {
    return this.videosService.create(videoId);
  }
}
