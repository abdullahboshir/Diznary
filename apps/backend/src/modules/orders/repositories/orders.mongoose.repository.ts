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

    async findAll(filter: any = {}): Promise<Order[]> {
        return this.orderModel.find(filter)
            .populate({
                path: 'items.productId',
                model: 'Product',
                strictPopulate: false,
                populate: [
                    { path: 'category', strictPopulate: false },
                    { path: 'department', strictPopulate: false }
                ]
            } as any)
            .populate('userId')
            .exec();
    }

    async findOne(id: string): Promise<Order | null> {
        return this.orderModel.findById(id)
            .populate({
                path: 'items.productId',
                model: 'Product',
                strictPopulate: false,
                populate: [
                    { path: 'category', strictPopulate: false },
                    { path: 'department', strictPopulate: false }
                ]
            } as any)
            .populate('userId')
            .exec();
    }

    async findByUser(userId: string): Promise<Order[]> {
        return this.orderModel.find({ userId })
            .populate({
                path: 'items.productId',
                model: 'Product',
                strictPopulate: false,
                populate: [
                    { path: 'category', strictPopulate: false },
                    { path: 'department', strictPopulate: false }
                ]
            } as any)
            .exec();
    }
}
