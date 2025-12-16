import { Model } from 'mongoose';
import { Package } from './schemas/package.schema';
export declare class PackagesService {
    private packageModel;
    constructor(packageModel: Model<Package>);
    create(createPackageDto: any): Promise<Package>;
    findAll(): Promise<Package[]>;
    findOne(id: string): Promise<Package | null>;
    update(id: string, updatePackageDto: any): Promise<Package | null>;
    remove(id: string): Promise<Package | null>;
}
