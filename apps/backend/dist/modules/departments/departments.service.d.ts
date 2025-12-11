import { IDepartmentsRepository } from './repositories/departments.repository.interface';
export declare class DepartmentsService {
    private readonly departmentsRepository;
    constructor(departmentsRepository: IDepartmentsRepository);
    create(data: any): Promise<import("./schemas/department.schema").Department>;
    findAll(): Promise<import("./schemas/department.schema").Department[]>;
    findOne(id: string): Promise<import("./schemas/department.schema").Department | null>;
    update(id: string, data: any): Promise<import("./schemas/department.schema").Department | null>;
    remove(id: string): Promise<import("./schemas/department.schema").Department | null>;
}
