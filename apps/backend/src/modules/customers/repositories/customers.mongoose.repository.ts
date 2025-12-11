import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Customer } from '../schemas/customer.schema';
import { ICustomersRepository } from './customers.repository.interface';

@Injectable()
export class CustomersMongooseRepository
    extends MongooseRepository<Customer>
    implements ICustomersRepository {
    constructor(
        @InjectModel(Customer.name) private readonly customerModel: Model<Customer>,
    ) {
        super(customerModel);
    }
}
