import { Inject, Injectable } from '@nestjs/common';
import { IProductsRepository } from './repositories/products.repository.interface';

@Injectable()
export class ProductsService {
    constructor(
        @Inject(IProductsRepository)
        private readonly productsRepository: IProductsRepository,
    ) { }

    create(data: any) {
        return this.productsRepository.create(data);
    }

    findAll() {
        return this.productsRepository.findAll();
    }

    findOne(id: string) {
        return this.productsRepository.findOne(id);
    }

    update(id: string, data: any) {
        return this.productsRepository.update(id, data);
    }

    remove(id: string) {
        return this.productsRepository.remove(id);
    }
}
