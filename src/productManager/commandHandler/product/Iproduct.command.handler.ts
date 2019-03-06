import { Product } from '../../domain/aggregates/products/product';
import { AddProduct } from '../../interface/commands/addProduct';

export interface IProductCommandHandler {
    getProducts(): Product[];
    addProduct(command: AddProduct);
}