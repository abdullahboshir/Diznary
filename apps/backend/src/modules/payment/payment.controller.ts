import { Body, Controller, Post, UseGuards, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { SSLCommerzService } from './sslcommerz.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { Response } from 'express';

@Controller('payment')
export class PaymentController {
    constructor(
        private readonly paymentService: PaymentService,
        private readonly sslCommerzService: SSLCommerzService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post('create-intent')
    async createPaymentIntent(@Body() body: { amount: number; currency?: string }) {
        const result = await this.paymentService.createPaymentIntent(body.amount, body.currency);
        return {
            success: true,
            message: "Payment intent created successfully",
            data: result
        };
    }

    @UseGuards(JwtAuthGuard)
    @Post('sslcommerz-init')
    async initSSLCommerzPayment(@Body() body: any) {
        // Body should contain amount, order details, etc.
        // For simplicity, we assume frontend sends structured data or we build it here.
        // In a real app, we'd fetch order from DB using ID.
        const paymentData = {
            total_amount: body.amount,
            currency: 'BDT',
            tran_id: body.orderId || `TXN_${Date.now()}`,
            success_url: `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/v1/payment/sslcommerz-success`,
            fail_url: `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/v1/payment/sslcommerz-fail`,
            cancel_url: `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/v1/payment/sslcommerz-cancel`,
            cus_name: body.cus_name || 'Customer',
            cus_email: body.cus_email || 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_city: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01700000000',
            shipping_method: 'NO',
            product_name: body.product_name || 'Digital Product',
            product_category: 'Digital',
            product_profile: 'general',
        };

        const result = await this.sslCommerzService.initPayment(paymentData);
        return {
            success: true,
            data: result
        };
    }

    @Post('sslcommerz-success')
    async sslCommerzSuccess(@Body() body: any, @Res() res: Response) {
        // Validate payment
        const validation = await this.sslCommerzService.validatePayment(body.val_id);
        if (validation) {
            // Update order status in DB here
            // e.g. await this.ordersService.updatePaymentStatus(body.tran_id, 'PAID');
            return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/orders?status=success`);
        }
        return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/orders?status=failed`);
    }

    @Post('sslcommerz-fail')
    async sslCommerzFail(@Body() body: any, @Res() res: Response) {
        return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/orders?status=failed`);
    }

    @Post('sslcommerz-cancel')
    async sslCommerzCancel(@Body() body: any, @Res() res: Response) {
        return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/orders?status=cancelled`);
    }
}
