import { Controller, Post, Body, Get, Param, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('category')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Post('createCategory')
    async create(@Body() body: any) {
        try {
            return await this.categoriesService.create(body);
        } catch (error) {
            console.error('Create Category Error:', error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':departmentId/getCategories')
    async findByDepartment(@Param('departmentId') departmentId: string) {
        const result = await this.categoriesService.findAllByDepartment(departmentId);
        return {
            data: result,
            message: "Categories fetched successfully"
        };
    }

    @Get('getAll/categories')
    async findAll() {
        const result = await this.categoriesService.findAll();
        return {
            data: result,
            message: "All categories fetched successfully"
        };
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.categoriesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoriesService.remove(id);
    }
}
