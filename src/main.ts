declare const module: any;
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ISwagger, Swagger } from '@app/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  logger.log(`enable ValidationPipe`);

  const swagger: ISwagger = {
    url: 'localhost:3000',
    path: '/',
    name: 'Sample Store',
  };
  new Swagger(app, swagger);
  logger.log(`enable swagger ${swagger.url}${swagger.path}`);

  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
