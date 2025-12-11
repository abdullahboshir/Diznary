import { IOrdersRepository } from './repositories/orders.repository.interface';
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: IOrdersRepository);
    create(data: any): Promise<import("./schemas/order.schema").Order>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        data: import("./schemas/order.schema").Order[];
    }>;
    findByUser(userId: string): Promise<{
        success: boolean;
        message: string;
        data: import("./schemas/order.schema").Order[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data: import("./schemas/order.schema").Order | null;
    }>;
    update(id: string, data: any): Promise<{
        success: boolean;
        message: string;
        data: import("./schemas/order.schema").Order | null;
    }>;
}
