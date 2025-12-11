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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const categories_repository_interface_1 = require("./repositories/categories.repository.interface");
let CategoriesService = class CategoriesService {
    categoriesRepository;
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    create(data) {
        return this.categoriesRepository.create(data);
    }
    findAll() {
        return this.categoriesRepository.findAll();
    }
    findAllByDepartment(departmentId) {
        return this.categoriesRepository.findAllByDepartment(departmentId);
    }
    findOne(id) {
        return this.categoriesRepository.findOne(id);
    }
    update(id, data) {
        return this.categoriesRepository.update(id, data);
    }
    remove(id) {
        return this.categoriesRepository.remove(id);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(categories_repository_interface_1.ICategoriesRepository)),
    __metadata("design:paramtypes", [Object])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map