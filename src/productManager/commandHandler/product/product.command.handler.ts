import { IProductCommandHandler } from './Iproduct.command.handler';
import { Product } from '../../domain/aggregates/products/product';
import { AddProduct } from 'src/productManager/interface/commands/addProduct';

export class ProductCommandHandler implements IProductCommandHandler {

  products = [
    new Product('1', 'iphone', '45552685', 'mobile'),
    new Product('2', 'iphone', '45552685', 'mobile'),
    new Product('3', 'iphone', '45552685', 'mobile')
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(command: AddProduct) {
    const id = this.products.length + 1;
    const product = new Product(id.toString(), command.name, command.price, command.category);
    this.products.push(product);
  }
}