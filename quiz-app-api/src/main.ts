import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { databaseConnect } from './config/mongodb';

async function bootstrap() {
  await databaseConnect();

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}

bootstrap();
