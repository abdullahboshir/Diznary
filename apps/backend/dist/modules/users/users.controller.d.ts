import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: any): Promise<import("./schemas/user.schema").User>;
    findAll(): Promise<import("./schemas/user.schema").User[]>;
    findOne(id: string): Promise<import("./schemas/user.schema").User | null>;
    update(id: string, updateData: any): Promise<import("./schemas/user.schema").User | null>;
    remove(id: string): Promise<import("./schemas/user.schema").User | null>;
}
