import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from '../../../database/abstracts/mongoose.repository';
import { User } from '../schemas/user.schema';
import { IUsersRepository } from './users.repository.interface';

@Injectable()
export class UsersMongooseRepository
    extends MongooseRepository<User>
    implements IUsersRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
        super(userModel);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }
}
