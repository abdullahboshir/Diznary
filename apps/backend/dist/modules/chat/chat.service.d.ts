import { Model } from 'mongoose';
import { Product } from '../products/schemas/product.schema';
export declare class ChatService {
    private productModel;
    constructor(productModel: Model<Product>);
    processMessage(message: string): Promise<string>;
}
