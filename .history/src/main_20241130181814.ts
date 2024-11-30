import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('Clean Architecture API')
    .setDescription('The Clean Architecture API description')
    .setVersion('1.0')
    .addTag('products')
    .addTag('orders')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' คือ path ที่จะใช้เปิด swagger

  await app.listen(3000);
}
bootstrap();
