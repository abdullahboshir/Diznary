import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(createContactDto: CreateContactDto): Promise<{
        success: boolean;
        message: string;
        data: import("./schemas/contact.schema").Contact;
    }>;
    findAll(): Promise<{
        success: boolean;
        data: import("./schemas/contact.schema").Contact[];
    }>;
}
