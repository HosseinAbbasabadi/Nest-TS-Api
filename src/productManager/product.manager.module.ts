import { Module } from '@nestjs/common';
import { ProductController } from './interface/controllers/product.controller';
import { ProductCommandHandler } from './commandHandler/product/product.command.handler';

const appServiceProvider = { provide:  'IAppService', useClass: ProductCommandHandler };

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ appServiceProvider ]
})

export class ProductManagerModule {}