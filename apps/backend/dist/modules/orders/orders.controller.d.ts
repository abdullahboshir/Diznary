import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(body: any): Promise<import("./schemas/order.schema").Order>;
    findAll(req: any): Promise<{
        success: boolean;
        message: string;
        data: import("./schemas/order.schema").Order[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data: import("./schemas/order.schema").Order | null;
    }>;
    update(id: string, body: any): Promise<{
        success: boolean;
        message: string;
        data: import("./schemas/order.schema").Order | null;
    }>;
}
