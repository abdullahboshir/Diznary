import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';

@Controller('department')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) { }

    @Post('create')
    create(@Body() body: any) {
        return this.departmentsService.create(body);
    }

    @Get('getDepartments')
    findAll() {
        return this.departmentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.departmentsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.departmentsService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.departmentsService.remove(id);
    }
}
