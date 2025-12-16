import { PackagesService } from './packages.service';
export declare class PackagesController {
    private readonly packagesService;
    constructor(packagesService: PackagesService);
    create(createPackageDto: any): Promise<import("./schemas/package.schema").Package>;
    findAll(): Promise<import("./schemas/package.schema").Package[]>;
    findOne(id: string): Promise<import("./schemas/package.schema").Package | null>;
    update(id: string, updatePackageDto: any): Promise<import("./schemas/package.schema").Package | null>;
    remove(id: string): Promise<import("./schemas/package.schema").Package | null>;
}
