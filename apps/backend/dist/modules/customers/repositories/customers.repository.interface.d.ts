import { IRepository } from '../../../database/interfaces/repository.interface';
import { Customer } from '../schemas/customer.schema';
export interface ICustomersRepository extends IRepository<Customer> {
}
export declare const ICustomersRepository: unique symbol;
