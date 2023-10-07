import * as dynamoose from 'dynamoose';

const VideoSchema = new dynamoose.Schema({
  ID: { type: String, hashKey: true, required: true },
  title: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  video: { type: String, required: true },
});

export const VideoModel = dynamoose.model('afex-videos-album', VideoSchema);
