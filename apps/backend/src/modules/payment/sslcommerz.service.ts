
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SSLCommerzPayment from 'sslcommerz-lts';

@Injectable()
export class SSLCommerzService {
    private storeId: string;
    private storePass: string;
    private isLive: boolean;

    constructor(private configService: ConfigService) {
        this.storeId = this.configService.get<string>('SSLCOMMERZ_STORE_ID') || 'testbox';
        this.storePass = this.configService.get<string>('SSLCOMMERZ_STORE_PASS') || 'qwerty';
        this.isLive = this.configService.get<string>('NODE_ENV') === 'production';
    }

    async initPayment(data: {
        total_amount: number;
        currency: string;
        tran_id: string;
        success_url: string;
        fail_url: string;
        cancel_url: string;
        cus_name: string;
        cus_email: string;
        cus_add1: string;
        cus_city: string;
        cus_postcode: string;
        cus_country: string;
        cus_phone: string;
        shipping_method: string;
        product_name: string;
        product_category: string;
        product_profile: string;
    }) {
        const sslcz = new SSLCommerzPayment(this.storeId, this.storePass, this.isLive);
        try {
            const apiResponse = await sslcz.init(data);
            return apiResponse; // { GatewayPageURL: '...', status: 'SUCCESS', ... }
        } catch (error) {
            console.error('SSLCommerz Init Error:', error);
            throw error;
        }
    }

    async validatePayment(val_id: string) {
        const sslcz = new SSLCommerzPayment(this.storeId, this.storePass, this.isLive);
        try {
            const validationResponse = await sslcz.validate({ val_id });
            return validationResponse;
        } catch (error) {
            console.error('SSLCommerz Validation Error:', error);
            throw error;
        }
    }
}
