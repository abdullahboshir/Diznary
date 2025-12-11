import { IRepository } from '../../../database/interfaces/repository.interface';
import { Product } from '../schemas/product.schema';
export interface IProductsRepository extends IRepository<Product> {
}
export declare const IProductsRepository: unique symbol;
