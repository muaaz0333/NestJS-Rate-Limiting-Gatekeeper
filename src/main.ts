import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(app.get(ThrottlerGuard));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
