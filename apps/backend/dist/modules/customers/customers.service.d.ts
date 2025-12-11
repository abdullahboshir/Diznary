import { IUsersRepository } from '../users/repositories/users.repository.interface';
import { ICustomersRepository } from './repositories/customers.repository.interface';
export declare class CustomersService {
    private readonly customersRepository;
    private readonly usersRepository;
    constructor(customersRepository: ICustomersRepository, usersRepository: IUsersRepository);
    create(data: any): Promise<import("./schemas/customer.schema").Customer>;
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
    update(id: string, data: any): Promise<import("./schemas/customer.schema").Customer | null>;
    remove(id: string): Promise<import("./schemas/customer.schema").Customer | null>;
}
