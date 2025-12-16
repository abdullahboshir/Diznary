import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    async sendMessage(@Body() body: { message: string }) {
        const response = await this.chatService.processMessage(body.message);
        return {
            statusCode: HttpStatus.OK,
            success: true,
            message: "Chat response processed successfully",
            data: { response }
        };
    }
}
