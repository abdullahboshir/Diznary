import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { ConfigModule } from '@nestjs/config';
import { SSLCommerzService } from './sslcommerz.service';

@Module({
    imports: [ConfigModule, AuthModule],
    controllers: [PaymentController],
    providers: [PaymentService, SSLCommerzService],
    exports: [PaymentService, SSLCommerzService],
})
export class PaymentModule { }
