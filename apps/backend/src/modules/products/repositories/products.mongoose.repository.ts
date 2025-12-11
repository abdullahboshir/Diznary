import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Product } from '../schemas/product.schema';
import { IProductsRepository } from './products.repository.interface';

@Injectable()
export class ProductsMongooseRepository
    extends MongooseRepository<Product>
    implements IProductsRepository {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<Product>,
    ) {
        super(productModel);
    }
}
