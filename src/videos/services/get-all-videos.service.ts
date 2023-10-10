import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { VideoModel } from '../models/video.model';

@Injectable()
export class GetAllVideosService {
  async execute() {
    try {
      const videos = await VideoModel.scan().exec();
      return videos;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }
}
