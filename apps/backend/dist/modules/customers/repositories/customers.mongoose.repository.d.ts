import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Customer } from '../schemas/customer.schema';
import { ICustomersRepository } from './customers.repository.interface';
export declare class CustomersMongooseRepository extends MongooseRepository<Customer> implements ICustomersRepository {
    private readonly customerModel;
    constructor(customerModel: Model<Customer>);
}
