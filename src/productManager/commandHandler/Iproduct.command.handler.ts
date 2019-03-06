import { Product } from '../domain/aggregates/products/product';

export interface IProductCommandHandler {
    getProducts(): Product[];
}