import { Injectable, Inject } from '@nestjs/common';
import { IOrdersRepository } from './repositories/orders.repository.interface';
import { PaymentService } from '../payment/payment.service'; // Keep PaymentService if it's still needed elsewhere, but remove from constructor and create method logic.

@Injectable()
export class OrdersService {
    constructor(
        @Inject(IOrdersRepository)
        private readonly ordersRepository: IOrdersRepository,
        // private paymentService: PaymentService // Removed as per instruction's new create method
    ) { }

    create(data: any) {
        // Note: Assuming implementation handles 'products' array correctly or 
        // basic structure mapping. Mongoose creates differently than Prisma (nested create vs refs)
        // For now passing data directly, may need adjustment based on exact DTO structure.
        return this.ordersRepository.create(data);
    }

    async findAll() {
        const data = await this.ordersRepository.findAll();
        return {
            success: true,
            message: 'Orders retrieved successfully',
            data
        };
    }

    async findByUser(userId: string) {
        const data = await this.ordersRepository.findByUser(userId);
        return {
            success: true,
            message: 'User orders retrieved successfully',
            data
        };
    }

    async findOne(id: string) {
        const data = await this.ordersRepository.findOne(id);
        return {
            success: true,
            message: 'Order retrieved successfully',
            data
        };
    }

    async update(id: string, data: any) {
        const updatedOrder = await this.ordersRepository.update(id, data);
        return {
            success: true,
            message: 'Order updated successfully',
            data: updatedOrder
        };
    }
}
