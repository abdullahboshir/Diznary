import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { Order } from '../schemas/order.schema';
import { IOrdersRepository } from './orders.repository.interface';

@Injectable()
export class OrdersMongooseRepository
    extends MongooseRepository<Order>
    implements IOrdersRepository {
    constructor(
        @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    ) {
        super(orderModel);
    }

    async findByUser(userId: string): Promise<Order[]> {
        return this.orderModel.find({ userId }).exec();
    }
}
