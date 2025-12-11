import { PaymentService } from './payment.service';
import { SSLCommerzService } from './sslcommerz.service';
import type { Response } from 'express';
export declare class PaymentController {
    private readonly paymentService;
    private readonly sslCommerzService;
    constructor(paymentService: PaymentService, sslCommerzService: SSLCommerzService);
    createPaymentIntent(body: {
        amount: number;
        currency?: string;
    }): Promise<{
        success: boolean;
        message: string;
        data: import("stripe").Stripe.Response<import("stripe").Stripe.PaymentIntent>;
    }>;
    initSSLCommerzPayment(body: any): Promise<{
        success: boolean;
        data: any;
    }>;
    sslCommerzSuccess(body: any, res: Response): Promise<void>;
    sslCommerzFail(body: any, res: Response): Promise<void>;
    sslCommerzCancel(body: any, res: Response): Promise<void>;
}
