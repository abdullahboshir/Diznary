import { DepartmentsService } from './departments.service';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(body: any): Promise<import("./schemas/department.schema").Department>;
    findAll(): Promise<import("./schemas/department.schema").Department[]>;
    findOne(id: string): Promise<import("./schemas/department.schema").Department | null>;
    update(id: string, body: any): Promise<import("./schemas/department.schema").Department | null>;
    remove(id: string): Promise<import("./schemas/department.schema").Department | null>;
}
