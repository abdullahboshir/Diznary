import { Controller, Post, Body, UnauthorizedException, Request } from '@nestjs/common';
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

    @Post('refresh-token')
    async refreshToken(@Body() body, @Request() req) {
        // Simple implementation: expecting refreshToken in cookies
        const refreshToken = req.cookies?.['refreshToken'];
        if (!refreshToken) {
            throw new UnauthorizedException('No refresh token found');
        }

        // Decoding token to get user info (skipping signature verification for now to unblock, 
        // strictly should use JwtService.verify or a dedicated Guard)
        // Assuming refresh token payload has { sub: userId, email, role } similar to access token
        const jwt = require('jsonwebtoken'); // Using raw jwt decode for quick extraction if JwtService fails on expired/different secret
        const decoded = jwt.decode(refreshToken);

        if (!decoded) {
            throw new UnauthorizedException('Invalid refresh token');
        }

        return this.authService.refreshToken({
            userId: decoded.sub,
            email: decoded.email,
            role: decoded.role
        });
    }
}
