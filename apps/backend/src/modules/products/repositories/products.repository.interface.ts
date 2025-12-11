import { IRepository } from '../../../database/interfaces/repository.interface';
import { Product } from '../schemas/product.schema';

export interface IProductsRepository extends IRepository<Product> {
    // Add specific methods here if needed
}

export const IProductsRepository = Symbol('IProductsRepository');
