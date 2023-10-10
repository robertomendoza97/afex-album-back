import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { YoutubeAPIResponse } from '../interfaces/youtube-api-response.interface';
import { VideoForDynamo } from '../interfaces/video-for-dynamo.interface';
import { VideoModel } from '../models/video.model';
import { ERROR_MESSAGES } from 'src/Shared/error-messages';

@Injectable()
export class VideosService {
  async create(videoId: string) {
    {
      const exist = await VideoModel.get(videoId);

      if (exist) this.handleErrors(409);

      const previousVideo = await this.getVideoFromApi(videoId);

      const newVideoFormat: VideoForDynamo = {
        ID: videoId,
        title: previousVideo.snippet.title,
        description: previousVideo.snippet.description,
        thumbnail: previousVideo.snippet.thumbnails.medium.url,
        duration: previousVideo.contentDetails.duration,
        video: previousVideo.player.embedHtml,
      };

      await VideoModel.create(newVideoFormat);

      return newVideoFormat;
    }
  }

  async getVideoFromApi(videoId: string) {
    // try {
    const { data } = await axios.get<YoutubeAPIResponse>(
      `${process.env.YOU_TUBE_API}?id=${videoId}&key=${process.env.APY_KEY}&part=snippet&part=contentDetails&part=player`,
    );

    if (data.items.length > 0) {
      return data.items[0];
    } else {
      this.handleErrors(404);
    }
  }

  handleErrors(code?: number) {
    if (code === 404) {
      throw new NotFoundException(ERROR_MESSAGES.VIDEO_NOT_EXIST);
    } else if (code === 409) {
      throw new ConflictException(ERROR_MESSAGES.VIDEO_ALREADY_EXISTS);
    } else {
      throw new InternalServerErrorException(ERROR_MESSAGES.UNEXPECTED_ERROR);
    }
  }
}
