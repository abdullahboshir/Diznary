import { Document, Schema as MongooseSchema } from 'mongoose';
export declare class Customer extends Document {
    name: string;
    userId: string;
    address?: string;
    phone?: string;
}
export declare const CustomerSchema: MongooseSchema<Customer, import("mongoose").Model<Customer, any, any, any, Document<unknown, any, Customer, any, {}> & Customer & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Customer, Document<unknown, {}, import("mongoose").FlatRecord<Customer>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Customer> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
