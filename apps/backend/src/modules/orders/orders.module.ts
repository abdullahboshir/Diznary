import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PaymentModule } from '../payment/payment.module';
import { Order, OrderSchema } from './schemas/order.schema';
import { IOrdersRepository } from './repositories/orders.repository.interface';
import { OrdersMongooseRepository } from './repositories/orders.mongoose.repository';

@Module({
  imports: [
    PaymentModule,
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
    ]),
  ],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: IOrdersRepository,
      useClass: OrdersMongooseRepository,
    },
  ]
})
export class OrdersModule { }
