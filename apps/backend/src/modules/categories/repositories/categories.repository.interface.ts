import { IRepository } from '../../../database/interfaces/repository.interface';
import { Category } from '../schemas/category.schema';

export interface ICategoriesRepository extends IRepository<Category> {
    findAllByDepartment(departmentId: string): Promise<Category[]>;
}

export const ICategoriesRepository = Symbol('ICategoriesRepository');
