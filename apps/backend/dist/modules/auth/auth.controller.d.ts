import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: any): Promise<{
        accessToken: string;
    }>;
    changePassword(body: any): Promise<{
        message: string;
    }>;
}
