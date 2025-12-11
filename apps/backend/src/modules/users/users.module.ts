import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { IUsersRepository } from './repositories/users.repository.interface';
import { UsersMongooseRepository } from './repositories/users.mongoose.repository';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    CustomersModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: IUsersRepository,
      useClass: UsersMongooseRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule { }
