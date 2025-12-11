import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';
import { IRepository } from '../interfaces/repository.interface';

export abstract class MongooseRepository<T extends Document>
    implements IRepository<T> {
    constructor(protected readonly model: Model<T>) { }

    async create(data: any): Promise<T> {
        const createdEntity = new this.model(data);
        return createdEntity.save();
    }

    async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
        return this.model.find(filter).exec();
    }

    async findOne(id: string): Promise<T | null> {
        return this.model.findById(id).exec();
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        return this.model
            .findByIdAndUpdate(id, data as UpdateQuery<T>, { new: true })
            .exec();
    }

    async remove(id: string): Promise<T | null> {
        return this.model.findByIdAndDelete(id).exec();
    }
}
