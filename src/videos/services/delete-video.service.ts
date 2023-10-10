import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { VideoModel } from '../models/video.model';
import { ERROR_MESSAGES } from 'src/Shared/error-messages';

@Injectable()
export class DeleteVideoService {
  async execute(videoId: string) {
    const exist = await VideoModel.get(videoId);

    if (!exist) this.handleErrors(404);

    await VideoModel.delete(videoId);

    return { status: 'ok' };
  }

  handleErrors(code?: number) {
    if (code === 404) {
      throw new NotFoundException(ERROR_MESSAGES.VIDEO_NOT_EXIST);
    } else {
      throw new InternalServerErrorException(ERROR_MESSAGES.UNEXPECTED_ERROR);
    }
  }
}
