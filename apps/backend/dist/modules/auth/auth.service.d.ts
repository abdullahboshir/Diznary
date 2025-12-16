import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
    changePassword(userId: string, oldPass: string, newPass: string): Promise<{
        message: string;
    }>;
    refreshToken(user: any): Promise<{
        accessToken: string;
    }>;
}
