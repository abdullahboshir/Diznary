import { ICategoriesRepository } from './repositories/categories.repository.interface';
export declare class CategoriesService {
    private readonly categoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository);
    create(data: any): Promise<import("./schemas/category.schema").Category>;
    findAll(): Promise<import("./schemas/category.schema").Category[]>;
    findAllByDepartment(departmentId: string): Promise<import("./schemas/category.schema").Category[]>;
    findOne(id: string): Promise<import("./schemas/category.schema").Category | null>;
    update(id: string, data: any): Promise<import("./schemas/category.schema").Category | null>;
    remove(id: string): Promise<import("./schemas/category.schema").Category | null>;
}
