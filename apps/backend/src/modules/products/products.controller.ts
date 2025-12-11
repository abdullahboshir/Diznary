import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post('createProduct')
    create(@Body() body: any) {
        return this.productsService.create(body);
    }

    @Get('getProducts')
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.productsService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(id);
    }
}
