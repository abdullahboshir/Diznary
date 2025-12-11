import { Controller, Post, Body, Get, Param, UseGuards, Req, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() body: any) {
        return this.ordersService.create(body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(@Req() req: any) {
        const user = req.user;
        if (user.role === 'customer') {
            return this.ordersService.findByUser(user.userId);
        }
        return this.ordersService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordersService.findOne(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.ordersService.update(id, body);
    }
}
