import { Inject, Injectable } from '@nestjs/common';
import { ICategoriesRepository } from './repositories/categories.repository.interface';

@Injectable()
export class CategoriesService {
    constructor(
        @Inject(ICategoriesRepository)
        private readonly categoriesRepository: ICategoriesRepository,
    ) { }

    create(data: any) {
        return this.categoriesRepository.create(data);
    }

    findAll() {
        return this.categoriesRepository.findAll();
    }

    findAllByDepartment(departmentId: string) {
        return this.categoriesRepository.findAllByDepartment(departmentId);
    }

    findOne(id: string) {
        return this.categoriesRepository.findOne(id);
    }

    update(id: string, data: any) {
        return this.categoriesRepository.update(id, data);
    }

    remove(id: string) {
        return this.categoriesRepository.remove(id);
    }
}
