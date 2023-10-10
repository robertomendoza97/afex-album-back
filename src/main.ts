import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('afex/api');
  app.enableCors();

  await app.listen(process.env.PORT).then(() => {
    console.log('server running in port ' + process.env.PORT);
  });
}
bootstrap();
