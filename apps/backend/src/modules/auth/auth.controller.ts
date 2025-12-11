import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() body) {
        const user = await this.authService.validateUser(body.email, body.password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return this.authService.login(user);
    }

    @Post('change-password')
    async changePassword(@Body() body) {
        // body: { userId, oldPassword, newPassword }
        // In a real app, userId should come from the JWT guard (Request user)
        // For now, accepting it in body or trusting the client if no guard is active globally on this route yet
        // Ideally: Use @UseGuards(JwtAuthGuard) and get user from @Request()
        return this.authService.changePassword(body.userId, body.oldPassword, body.newPassword);
    }
}
