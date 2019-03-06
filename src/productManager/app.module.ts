import { Module } from '@nestjs/common';
import { AppController } from './interface/controllers/app.controller';
import { ProductCommandHandler } from './commandHandler/product.command.handler';

const appServiceProvider = { provide:  'IAppService', useClass: ProductCommandHandler };

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ appServiceProvider ]
})

export class AppModule {}