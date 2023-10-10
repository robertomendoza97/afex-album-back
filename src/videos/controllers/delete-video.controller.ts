import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteVideoService } from '../services/delete-video.service';

@Controller('videos')
export class DeleteVideoController {
  constructor(private readonly deleteVideoService: DeleteVideoService) {}

  @Delete(':videoId')
  deleteVideo(@Param('videoId') videoId: string) {
    return this.deleteVideoService.execute(videoId);
  }
}
