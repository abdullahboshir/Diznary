import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Category } from '../schemas/category.schema';
import { ICategoriesRepository } from './categories.repository.interface';
export declare class CategoriesMongooseRepository extends MongooseRepository<Category> implements ICategoriesRepository {
    private readonly categoryModel;
    constructor(categoryModel: Model<Category>);
    findAllByDepartment(departmentId: string): Promise<Category[]>;
}
