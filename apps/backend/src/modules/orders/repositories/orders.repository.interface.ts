import { IRepository } from '../../../database/interfaces/repository.interface';
import { Order } from '../schemas/order.schema';

export interface IOrdersRepository extends IRepository<Order> {
    findByUser(userId: string): Promise<Order[]>;
}

export const IOrdersRepository = Symbol('IOrdersRepository');
