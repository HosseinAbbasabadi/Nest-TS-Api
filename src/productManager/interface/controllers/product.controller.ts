import { Get, Controller, Inject, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { IProductCommandHandler } from '../../commandHandler/product/Iproduct.command.handler';
import { Product } from '../../domain/aggregates/products/product';
import { AddProduct } from '../commands/addProduct';

@Controller()
export class ProductController {
  
  constructor(@Inject('IAppService') private readonly appService: IProductCommandHandler) {}

  @Get()
  getHello(): Product[] {
    return this.appService.getProducts();
  }

  @Post()
  addPost(@Body() command: AddProduct, @Res() res) {
    this.appService.addProduct(command);
    res.status(HttpStatus.OK).send();
  }
}
