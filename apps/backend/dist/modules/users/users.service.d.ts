import { IUsersRepository } from './repositories/users.repository.interface';
import { ICustomersRepository } from '../customers/repositories/customers.repository.interface';
export declare class UsersService {
    private readonly usersRepository;
    private readonly customersRepository;
    constructor(usersRepository: IUsersRepository, customersRepository: ICustomersRepository);
    create(data: any): Promise<import("./schemas/user.schema").User>;
    findByEmail(email: string): Promise<import("./schemas/user.schema").User | null>;
    findAll(): Promise<import("./schemas/user.schema").User[]>;
    findOne(id: string): Promise<import("./schemas/user.schema").User | null>;
    update(id: string, updateData: any): Promise<import("./schemas/user.schema").User | null>;
    remove(id: string): Promise<import("./schemas/user.schema").User | null>;
}
