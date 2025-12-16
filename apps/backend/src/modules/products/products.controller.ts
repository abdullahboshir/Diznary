import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post('createProduct')
    async create(@Body() body: any) {
        console.log('--- Create Product Request ---');
        console.log('Payload:', JSON.stringify(body, null, 2));
        try {
            const result = await this.productsService.create(body);
            console.log('Creation Result:', result);
            return {
                statusCode: 201,
                success: true,
                message: 'Product created successfully',
                data: result
            };
        } catch (error) {
            console.error('Create Product Error:', error);
            return {
                statusCode: 500,
                message: error.message || 'Internal server error',
                error: error
            }
        }
    }

    @Get('getProducts')
    async findAll() {
        const result = await this.productsService.findAll();
        return {
            statusCode: 200,
            success: true,
            data: result
        };
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
