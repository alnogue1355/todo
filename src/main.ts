import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Todo');
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  await app
    .listen(port)
    .then(() => logger.log(`Todo app is running on port ${port}`));
}
bootstrap().catch((error) => {
  console.error('Error during bootstrap:', error);
});
