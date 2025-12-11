import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        console.log(`[AuthDebug] Validating user: ${email}`);
        if (!user || !user.password) {
            console.log('[AuthDebug] User not found or password missing');
            return null;
        }
        const isMatch = await bcrypt.compare(pass, user.password);
        console.log(`[AuthDebug] Password match: ${isMatch}`);

        if (isMatch) {
            const userObj = user.toObject();
            const { password, ...result } = userObj;
            return result;
        }
        return null;
    }

    async login(user: any) {
        // user here is the result from validateUser, which is a plain object now
        // But validateUser returns `result` which might have `_id` instead of `id` if toObject was used directly on User implementation
        // Mongoose _id is an object, so toString() might be needed or handled by JSON serialization

        const payload = { email: user.email, sub: user._id.toString(), role: user.role };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async changePassword(userId: string, oldPass: string, newPass: string) {
        const user = await this.usersService.findOne(userId);
        if (!user || !user.password) {
            throw new UnauthorizedException('User not found');
        }

        const isMatch = await bcrypt.compare(oldPass, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Invalid old password');
        }

        const hashedNewPass = await bcrypt.hash(newPass, 10);
        await this.usersService.update(userId, { password: hashedNewPass });

        return { message: 'Password updated successfully' };
    }
}
