import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PassportModule } from '@nestjs/passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  PassportModule.register({ defaultStrategy: 'jwt' });

  await app.listen(3000);
}
bootstrap();
