import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../users/repositories/users.repository.interface';
import { ICustomersRepository } from './repositories/customers.repository.interface';

@Injectable()
export class CustomersService {
    constructor(
        @Inject(ICustomersRepository)
        private readonly customersRepository: ICustomersRepository,
        @Inject(IUsersRepository)
        private readonly usersRepository: IUsersRepository,
    ) { }

    create(data: any) {
        return this.customersRepository.create(data);
    }

    async findAll() {
        console.log('CustomersService.findAll triggered');
        try {
            // Fetch all users with role 'customer' or 'customer' using Repository
            const users = await this.usersRepository.findAll({ role: { $in: ['customer'] } });
            console.log(`Found ${users.length} users`);

            // Map to a format suitable for the frontend list
            const data = users.map(user => ({
                _id: user._id,
                name: user.email.split('@')[0], // derived name
                email: user.email,
                contactNo: 'N/A', // User schema doesn't have phone
                userId: user._id,
                role: user.role
            }));

            return {
                success: true,
                message: "Customers retrieved successfully",
                data: data
            };
        } catch (error) {
            console.error('Error in CustomersService.findAll:', error);
            throw error;
        }
    }

    findOne(id: string) {
        return this.customersRepository.findOne(id);
    }

    update(id: string, data: any) {
        return this.customersRepository.update(id, data);
    }

    remove(id: string) {
        return this.customersRepository.remove(id);
    }
}
