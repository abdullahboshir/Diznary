import { IRepository } from '../../../database/interfaces/repository.interface';
import { User } from '../schemas/user.schema';

export interface IUsersRepository extends IRepository<User> {
    findByEmail(email: string): Promise<User | null>;
}

export const IUsersRepository = Symbol('IUsersRepository');
