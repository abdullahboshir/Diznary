import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(body: any): Promise<import("./schemas/product.schema").Product>;
    findAll(): Promise<import("./schemas/product.schema").Product[]>;
    findOne(id: string): Promise<import("./schemas/product.schema").Product | null>;
    update(id: string, body: any): Promise<import("./schemas/product.schema").Product | null>;
    remove(id: string): Promise<import("./schemas/product.schema").Product | null>;
}
