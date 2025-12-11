import { Model, Document, FilterQuery } from 'mongoose';
import { IRepository } from '../interfaces/repository.interface';
export declare abstract class MongooseRepository<T extends Document> implements IRepository<T> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    create(data: any): Promise<T>;
    findAll(filter?: FilterQuery<T>): Promise<T[]>;
    findOne(id: string): Promise<T | null>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    remove(id: string): Promise<T | null>;
}
