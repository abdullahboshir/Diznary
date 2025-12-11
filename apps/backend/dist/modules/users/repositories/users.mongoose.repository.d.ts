import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { User } from '../schemas/user.schema';
import { IUsersRepository } from './users.repository.interface';
export declare class UsersMongooseRepository extends MongooseRepository<User> implements IUsersRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findByEmail(email: string): Promise<User | null>;
}
