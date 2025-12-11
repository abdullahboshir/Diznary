import { IRepository } from '../../../database/interfaces/repository.interface';
import { Department } from '../schemas/department.schema';
export interface IDepartmentsRepository extends IRepository<Department> {
}
export declare const IDepartmentsRepository: unique symbol;
