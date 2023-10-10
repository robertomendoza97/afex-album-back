import { Injectable } from '@nestjs/common';
import { VideoModel } from '../models/video.model';

@Injectable()
export class GetAllVideosService {
  async execute() {
    const videos = await VideoModel.scan().exec();
    return videos;
  }
}
