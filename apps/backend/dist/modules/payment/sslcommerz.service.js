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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSLCommerzService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sslcommerz_lts_1 = __importDefault(require("sslcommerz-lts"));
let SSLCommerzService = class SSLCommerzService {
    configService;
    storeId;
    storePass;
    isLive;
    constructor(configService) {
        this.configService = configService;
        this.storeId = this.configService.get('SSLCOMMERZ_STORE_ID') || 'testbox';
        this.storePass = this.configService.get('SSLCOMMERZ_STORE_PASS') || 'qwerty';
        this.isLive = this.configService.get('NODE_ENV') === 'production';
    }
    async initPayment(data) {
        const sslcz = new sslcommerz_lts_1.default(this.storeId, this.storePass, this.isLive);
        try {
            const apiResponse = await sslcz.init(data);
            return apiResponse;
        }
        catch (error) {
            console.error('SSLCommerz Init Error:', error);
            throw error;
        }
    }
    async validatePayment(val_id) {
        const sslcz = new sslcommerz_lts_1.default(this.storeId, this.storePass, this.isLive);
        try {
            const validationResponse = await sslcz.validate({ val_id });
            return validationResponse;
        }
        catch (error) {
            console.error('SSLCommerz Validation Error:', error);
            throw error;
        }
    }
};
exports.SSLCommerzService = SSLCommerzService;
exports.SSLCommerzService = SSLCommerzService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SSLCommerzService);
//# sourceMappingURL=sslcommerz.service.js.map