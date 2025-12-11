import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customer')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) { }

    @Post('createCustomer')
    create(@Body() body: any) {
        return this.customersService.create(body);
    }

    @Get('getCustomers')
    findAll() {
        return this.customersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.customersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.customersService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.customersService.remove(id);
    }
}
