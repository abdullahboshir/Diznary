import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(body: any): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: import("./schemas/product.schema").Product;
        error?: undefined;
    } | {
        statusCode: number;
        message: any;
        error: any;
        success?: undefined;
        data?: undefined;
    }>;
    findAll(): Promise<{
        statusCode: number;
        success: boolean;
        data: import("./schemas/product.schema").Product[];
    }>;
    findOne(id: string): Promise<import("./schemas/product.schema").Product | null>;
    update(id: string, body: any): Promise<import("./schemas/product.schema").Product | null>;
    remove(id: string): Promise<import("./schemas/product.schema").Product | null>;
}
