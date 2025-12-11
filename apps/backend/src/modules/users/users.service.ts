import { Inject, Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUsersRepository } from './repositories/users.repository.interface';
import { ICustomersRepository } from '../customers/repositories/customers.repository.interface';

@Injectable()
export class UsersService {
    constructor(
        @Inject(IUsersRepository)
        private readonly usersRepository: IUsersRepository,
        @Inject(ICustomersRepository)
        private readonly customersRepository: ICustomersRepository,
    ) { }

    async create(data: any) {
        const { firstName, lastName, ...rest } = data;

        // Check for existing user
        const existingUser = await this.findByEmail(rest.email);
        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        const hashedPassword = await bcrypt.hash(rest.password, 10);

        // Initial implementation: Sequential creation (Not atomic)
        // TODO: Implement Transaction/UnitOfWork for better reliability
        const user = await this.usersRepository.create({
            email: rest.email,
            password: hashedPassword,
            role: rest.role || 'customer',
        });

        try {
            await this.customersRepository.create({
                name: `${firstName} ${lastName}`,
                userId: user._id.toString(), // Mongoose uses _id
            });
        } catch (error) {
            // Simple rollback attempt if customer creation fails
            await this.usersRepository.remove(user._id.toString());
            throw error;
        }

        return user;
    }

    async findByEmail(email: string) {
        return this.usersRepository.findByEmail(email);
    }

    findAll() {
        return this.usersRepository.findAll();
    }

    findOne(id: string) {
        return this.usersRepository.findOne(id);
    }

    update(id: string, updateData: any) {
        return this.usersRepository.update(id, updateData);
    }

    remove(id: string) {
        return this.usersRepository.remove(id);
    }
}
