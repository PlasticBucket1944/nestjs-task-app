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
  console.log(__dirname);
  console.log(__dirname);
  console.log(__dirname);

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
