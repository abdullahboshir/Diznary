export interface IRepository<T> {
    create(data: T | any): Promise<T>;
    findAll(filter?: any): Promise<T[]>;
    findOne(id: string): Promise<T | null>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    remove(id: string): Promise<T | null>;
}
