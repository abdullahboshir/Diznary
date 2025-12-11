import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(body: any): Promise<import("./schemas/category.schema").Category>;
    findByDepartment(departmentId: string): Promise<import("./schemas/category.schema").Category[]>;
    findOne(id: string): Promise<import("./schemas/category.schema").Category | null>;
    update(id: string, body: any): Promise<import("./schemas/category.schema").Category | null>;
    remove(id: string): Promise<import("./schemas/category.schema").Category | null>;
}
