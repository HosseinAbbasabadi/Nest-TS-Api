import { Injectable } from '@nestjs/common';
import { IProductCommandHandler } from './Iproduct.command.handler';
import { Product } from '../domain/aggregates/products/product';

export class ProductCommandHandler implements IProductCommandHandler {

  products = [
    new Product('iphone', '45552685', 'mobile'),
    new Product('iphone', '45552685', 'mobile'),
    new Product('iphone', '45552685', 'mobile')
  ];

  getProducts(): Product[] {
    return this.products;
  }
}