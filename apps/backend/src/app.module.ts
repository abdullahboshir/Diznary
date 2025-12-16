import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from './mongoose/mongoose.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CustomersModule } from './modules/customers/customers.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ContactModule } from './modules/contact/contact.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { ChatModule } from './modules/chat/chat.module';
import { PackagesModule } from './modules/packages/packages.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule,
    AuthModule,
    UsersModule,
    CustomersModule,
    DepartmentsModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    PaymentModule,
    ContactModule,
    CloudinaryModule,
    ChatModule,
    PackagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
