import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Product } from '../schemas/product.schema';
import { IProductsRepository } from './products.repository.interface';
export declare class ProductsMongooseRepository extends MongooseRepository<Product> implements IProductsRepository {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    findAll(filter?: any): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
}
