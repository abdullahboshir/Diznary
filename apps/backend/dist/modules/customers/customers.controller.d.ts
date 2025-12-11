import { CustomersService } from './customers.service';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(body: any): Promise<import("./schemas/customer.schema").Customer>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        data: {
            _id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            contactNo: string;
            userId: import("mongoose").Types.ObjectId;
            role: import("../users/schemas/user.schema").UserRole;
        }[];
    }>;
    findOne(id: string): Promise<import("./schemas/customer.schema").Customer | null>;
    update(id: string, body: any): Promise<import("./schemas/customer.schema").Customer | null>;
    remove(id: string): Promise<import("./schemas/customer.schema").Customer | null>;
}
