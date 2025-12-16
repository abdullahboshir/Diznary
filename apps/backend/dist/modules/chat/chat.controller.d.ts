import { HttpStatus } from '@nestjs/common';
import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    sendMessage(body: {
        message: string;
    }): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: {
            response: string;
        };
    }>;
}
