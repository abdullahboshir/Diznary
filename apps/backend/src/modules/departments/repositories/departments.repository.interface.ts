import { IRepository } from '../../../database/interfaces/repository.interface';
import { Department } from '../schemas/department.schema';

export interface IDepartmentsRepository extends IRepository<Department> {
}

export const IDepartmentsRepository = Symbol('IDepartmentsRepository');
