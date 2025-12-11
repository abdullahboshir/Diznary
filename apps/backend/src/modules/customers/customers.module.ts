import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { Customer, CustomerSchema } from './schemas/customer.schema';
import { User, UserSchema } from '../users/schemas/user.schema';
import { ICustomersRepository } from './repositories/customers.repository.interface';
import { CustomersMongooseRepository } from './repositories/customers.mongoose.repository';

import { UsersMongooseRepository } from '../users/repositories/users.mongoose.repository';
import { IUsersRepository } from '../users/repositories/users.repository.interface';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [CustomersController],
  providers: [
    CustomersService,
    {
      provide: ICustomersRepository,
      useClass: CustomersMongooseRepository,
    },
    {
      provide: IUsersRepository,
      useClass: UsersMongooseRepository,
    },
  ],
  exports: [CustomersService, ICustomersRepository],
})
export class CustomersModule { }
