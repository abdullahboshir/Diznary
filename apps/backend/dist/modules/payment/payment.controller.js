"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const sslcommerz_service_1 = require("./sslcommerz.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let PaymentController = class PaymentController {
    paymentService;
    sslCommerzService;
    constructor(paymentService, sslCommerzService) {
        this.paymentService = paymentService;
        this.sslCommerzService = sslCommerzService;
    }
    async createPaymentIntent(body) {
        const result = await this.paymentService.createPaymentIntent(body.amount, body.currency);
        return {
            success: true,
            message: "Payment intent created successfully",
            data: result
        };
    }
    async initSSLCommerzPayment(body) {
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
    async sslCommerzSuccess(body, res) {
        const validation = await this.sslCommerzService.validatePayment(body.val_id);
        if (validation) {
            return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/orders?status=success`);
        }
        return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/orders?status=failed`);
    }
    async sslCommerzFail(body, res) {
        return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/orders?status=failed`);
    }
    async sslCommerzCancel(body, res) {
        return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard/orders?status=cancelled`);
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create-intent'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "createPaymentIntent", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('sslcommerz-init'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "initSSLCommerzPayment", null);
__decorate([
    (0, common_1.Post)('sslcommerz-success'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "sslCommerzSuccess", null);
__decorate([
    (0, common_1.Post)('sslcommerz-fail'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "sslCommerzFail", null);
__decorate([
    (0, common_1.Post)('sslcommerz-cancel'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "sslCommerzCancel", null);
exports.PaymentController = PaymentController = __decorate([
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService,
        sslcommerz_service_1.SSLCommerzService])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map