import { Document } from 'mongoose';
export declare enum ProductCategory {
    GRAPHICS_DESIGN = "Graphics Design",
    DIGITAL = "Digital",
    WEB_DEVELOPMENT = "Web Development"
}
export declare class Product extends Document {
    name: string;
    description: string;
    price: number;
    priceUSD?: number;
    priceBDT?: number;
    category: ProductCategory;
    images: string[];
    isActive: boolean;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product, any, {}> & Product & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Product> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
