import { Document, Types } from 'mongoose';
import { Department } from '../../departments/schemas/department.schema';
export declare class Category extends Document {
    name: string;
    description: string;
    department: Department | Types.ObjectId;
    image: string;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, Document<unknown, any, Category, any, {}> & Category & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, Document<unknown, {}, import("mongoose").FlatRecord<Category>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Category> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
