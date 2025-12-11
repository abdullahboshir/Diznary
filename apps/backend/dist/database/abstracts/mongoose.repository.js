"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseRepository = void 0;
class MongooseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        const createdEntity = new this.model(data);
        return createdEntity.save();
    }
    async findAll(filter = {}) {
        return this.model.find(filter).exec();
    }
    async findOne(id) {
        return this.model.findById(id).exec();
    }
    async update(id, data) {
        return this.model
            .findByIdAndUpdate(id, data, { new: true })
            .exec();
    }
    async remove(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
}
exports.MongooseRepository = MongooseRepository;
//# sourceMappingURL=mongoose.repository.js.map