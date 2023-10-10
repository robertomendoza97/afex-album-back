import { Controller, Get } from '@nestjs/common';
import { GetAllVideosService } from '../services/get-all-videos.service';

@Controller('videos')
export class GettAllvideosController {
  constructor(private readonly getAllVideosService: GetAllVideosService) {}

  @Get()
  getAllVideos() {
    return this.getAllVideosService.execute();
  }
}
