import { IProductsRepository } from './repositories/products.repository.interface';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: IProductsRepository);
    create(data: any): Promise<import("./schemas/product.schema").Product>;
    findAll(): Promise<import("./schemas/product.schema").Product[]>;
    findOne(id: string): Promise<import("./schemas/product.schema").Product | null>;
    update(id: string, data: any): Promise<import("./schemas/product.schema").Product | null>;
    remove(id: string): Promise<import("./schemas/product.schema").Product | null>;
}
