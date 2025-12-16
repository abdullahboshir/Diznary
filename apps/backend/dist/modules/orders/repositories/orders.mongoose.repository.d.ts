import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Order } from '../schemas/order.schema';
import { IOrdersRepository } from './orders.repository.interface';
export declare class OrdersMongooseRepository extends MongooseRepository<Order> implements IOrdersRepository {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    findAll(filter?: any): Promise<Order[]>;
    findOne(id: string): Promise<Order | null>;
    findByUser(userId: string): Promise<Order[]>;
}
