import { Document } from 'mongoose';
export declare class PackageFeature {
    text: string;
    included: boolean;
}
export declare class Package extends Document {
    title: string;
    description: string;
    price: string;
    priceBDT: string;
    originalPrice?: string;
    originalPriceBDT?: string;
    duration: string;
    icon?: string;
    popular: boolean;
    buttonText: string;
    category?: string;
    department?: string;
    features: PackageFeature[];
}
export declare const PackageSchema: import("mongoose").Schema<Package, import("mongoose").Model<Package, any, any, any, Document<unknown, any, Package, any, {}> & Package & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Package, Document<unknown, {}, import("mongoose").FlatRecord<Package>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Package> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
