import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(body: any): Promise<import("./schemas/category.schema").Category>;
    findByDepartment(departmentId: string): Promise<{
        data: import("./schemas/category.schema").Category[];
        message: string;
    }>;
    findAll(): Promise<{
        data: import("./schemas/category.schema").Category[];
        message: string;
    }>;
    findOne(id: string): Promise<import("./schemas/category.schema").Category | null>;
    update(id: string, body: any): Promise<import("./schemas/category.schema").Category | null>;
    remove(id: string): Promise<import("./schemas/category.schema").Category | null>;
}
