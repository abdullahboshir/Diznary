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

    async findAll(filter: any = {}): Promise<Category[]> {
        return this.categoryModel.find(filter)
            .populate('department')
            .exec();
    }

    async findOne(id: string): Promise<Category | null> {
        return this.categoryModel.findById(id)
            .populate('department')
            .exec();
    }

    async findAllByDepartment(departmentId: string): Promise<Category[]> {
        return this.categoryModel.find({ department: departmentId })
            .populate('department')
            .exec();
    }
}
