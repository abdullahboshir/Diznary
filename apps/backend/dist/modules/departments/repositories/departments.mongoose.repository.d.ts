import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Department } from '../schemas/department.schema';
import { IDepartmentsRepository } from './departments.repository.interface';
export declare class DepartmentsMongooseRepository extends MongooseRepository<Department> implements IDepartmentsRepository {
    private readonly departmentModel;
    constructor(departmentModel: Model<Department>);
}
