import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning().setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
