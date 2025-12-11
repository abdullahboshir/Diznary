import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentsRepository } from './repositories/departments.repository.interface';

@Injectable()
export class DepartmentsService {
    constructor(
        @Inject(IDepartmentsRepository)
        private readonly departmentsRepository: IDepartmentsRepository,
    ) { }

    create(data: any) {
        return this.departmentsRepository.create(data);
    }

    findAll() {
        return this.departmentsRepository.findAll();
    }

    findOne(id: string) {
        return this.departmentsRepository.findOne(id);
    }

    update(id: string, data: any) {
        return this.departmentsRepository.update(id, data);
    }

    remove(id: string) {
        return this.departmentsRepository.remove(id);
    }
}
