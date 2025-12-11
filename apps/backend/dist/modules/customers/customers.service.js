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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_interface_1 = require("../users/repositories/users.repository.interface");
const customers_repository_interface_1 = require("./repositories/customers.repository.interface");
let CustomersService = class CustomersService {
    customersRepository;
    usersRepository;
    constructor(customersRepository, usersRepository) {
        this.customersRepository = customersRepository;
        this.usersRepository = usersRepository;
    }
    create(data) {
        return this.customersRepository.create(data);
    }
    async findAll() {
        console.log('CustomersService.findAll triggered');
        try {
            const users = await this.usersRepository.findAll({ role: { $in: ['customer'] } });
            console.log(`Found ${users.length} users`);
            const data = users.map(user => ({
                _id: user._id,
                name: user.email.split('@')[0],
                email: user.email,
                contactNo: 'N/A',
                userId: user._id,
                role: user.role
            }));
            return {
                success: true,
                message: "Customers retrieved successfully",
                data: data
            };
        }
        catch (error) {
            console.error('Error in CustomersService.findAll:', error);
            throw error;
        }
    }
    findOne(id) {
        return this.customersRepository.findOne(id);
    }
    update(id, data) {
        return this.customersRepository.update(id, data);
    }
    remove(id) {
        return this.customersRepository.remove(id);
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(customers_repository_interface_1.ICustomersRepository)),
    __param(1, (0, common_1.Inject)(users_repository_interface_1.IUsersRepository)),
    __metadata("design:paramtypes", [Object, Object])
], CustomersService);
//# sourceMappingURL=customers.service.js.map