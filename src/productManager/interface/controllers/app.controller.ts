import { Get, Controller, Inject } from '@nestjs/common';
import { IProductCommandHandler } from '../../commandHandler/Iproduct.command.handler';
import { Product } from '../../domain/aggregates/products/product';
@Controller()
export class AppController {
  
  constructor(@Inject('IAppService') private readonly appService: IProductCommandHandler) {}

  @Get()
  getHello(): Product[] {
    return this.appService.getProducts();
  }
}
