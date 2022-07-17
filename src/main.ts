import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 環境変数を確認
  //export NODE_ENV='development' or 'production'
  switch (process.env.NODE_ENV) {
    case 'development':
    case 'production':
      break;
    default:
      throw Error('環境変数が設定されていません。 development or production');
  }

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  await app.listen(3000);
}
bootstrap();
