import { IRepository } from '../../../database/interfaces/repository.interface';
import { Customer } from '../schemas/customer.schema';

export interface ICustomersRepository extends IRepository<Customer> {
    // Add specific methods here if needed
}

export const ICustomersRepository = Symbol('ICustomersRepository');
