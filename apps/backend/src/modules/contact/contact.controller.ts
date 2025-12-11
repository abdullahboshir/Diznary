import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Uncomment if admin protection is needed for GET

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post()
    async create(@Body() createContactDto: CreateContactDto) {
        const data = await this.contactService.create(createContactDto);
        return {
            success: true,
            message: 'Message sent successfully',
            data
        };
    }

    // @UseGuards(JwtAuthGuard) // Protect this route for admin only
    @Get()
    async findAll() {
        const data = await this.contactService.findAll();
        return {
            success: true,
            data
        };
    }
}
