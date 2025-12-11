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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const orders_repository_interface_1 = require("./repositories/orders.repository.interface");
let OrdersService = class OrdersService {
    ordersRepository;
    constructor(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    create(data) {
        return this.ordersRepository.create(data);
    }
    async findAll() {
        const data = await this.ordersRepository.findAll();
        return {
            success: true,
            message: 'Orders retrieved successfully',
            data
        };
    }
    async findByUser(userId) {
        const data = await this.ordersRepository.findByUser(userId);
        return {
            success: true,
            message: 'User orders retrieved successfully',
            data
        };
    }
    async findOne(id) {
        const data = await this.ordersRepository.findOne(id);
        return {
            success: true,
            message: 'Order retrieved successfully',
            data
        };
    }
    async update(id, data) {
        const updatedOrder = await this.ordersRepository.update(id, data);
        return {
            success: true,
            message: 'Order updated successfully',
            data: updatedOrder
        };
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(orders_repository_interface_1.IOrdersRepository)),
    __metadata("design:paramtypes", [Object])
], OrdersService);
//# sourceMappingURL=orders.service.js.map