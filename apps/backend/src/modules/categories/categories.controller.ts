import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('category')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Post('createCategory')
    create(@Body() body: any) {
        return this.categoriesService.create(body);
    }

    @Get(':departmentId/getCategories')
    findByDepartment(@Param('departmentId') departmentId: string) {
        return this.categoriesService.findAllByDepartment(departmentId);
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
