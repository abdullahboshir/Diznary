import { Document, Types } from 'mongoose';
import { Department } from '../../departments/schemas/department.schema';
import { Category } from '../../categories/schemas/category.schema';
export declare class Product extends Document {
    name: string;
    description: string;
    price: number;
    priceUSD?: number;
    priceBDT?: number;
    category: Category | Types.ObjectId;
    department: Department | Types.ObjectId;
    images: string[];
    isActive: boolean;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product, any, {}> & Product & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Product> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
