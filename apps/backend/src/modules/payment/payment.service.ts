import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor(private configService: ConfigService) {
        this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY')!, {
            apiVersion: '2023-10-16' as any, // Using latest API version
        });
    }

    async createPaymentIntent(amount: number, currency: string = 'usd') {
        return this.stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency,
        });
    }
}
