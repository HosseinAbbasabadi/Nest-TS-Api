import { NestFactory } from '@nestjs/core';
import { ProductManagerModule } from './productManager/product.manager.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.create(ProductManagerModule);
  await app.listen(3000);
  console.log('listening on port 3000');
}

bootstrap();
