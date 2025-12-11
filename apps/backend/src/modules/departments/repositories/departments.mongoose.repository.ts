import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Department } from '../schemas/department.schema';
import { IDepartmentsRepository } from './departments.repository.interface';

@Injectable()
export class DepartmentsMongooseRepository
    extends MongooseRepository<Department>
    implements IDepartmentsRepository {
    constructor(
        @InjectModel(Department.name) private readonly departmentModel: Model<Department>,
    ) {
        super(departmentModel);
    }
}
