import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Category } from '../schemas/category.schema';
import { ICategoriesRepository } from './categories.repository.interface';

@Injectable()
export class CategoriesMongooseRepository
    extends MongooseRepository<Category>
    implements ICategoriesRepository {
    constructor(
        @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    ) {
        super(categoryModel);
    }

    async findAllByDepartment(departmentId: string): Promise<Category[]> {
        return this.categoryModel.find({ departmentId }).exec();
    }
}
