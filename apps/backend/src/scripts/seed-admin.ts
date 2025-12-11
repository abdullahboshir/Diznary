import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../modules/users/users.service';
import { UserRole } from '../modules/users/schemas/user.schema';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const usersService = app.get(UsersService);

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@diznary.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'password123';

    try {
        const existingAdmin = await usersService.findByEmail(adminEmail);
        if (existingAdmin) {
            console.log('Admin user already exists.');
            if (existingAdmin.role !== UserRole.ADMIN) {
                console.log('Updating existing admin role to ADMIN...');
                await usersService.update(existingAdmin._id.toString(), { role: UserRole.ADMIN });
                console.log('Admin role updated.');
            }
        } else {
            console.log('Creating admin user...');
            await usersService.create({
                firstName: 'System',
                lastName: 'Admin',
                email: adminEmail,
                password: adminPassword,
                role: UserRole.ADMIN,
            });
            console.log(`Admin created successfully: ${adminEmail} / ${adminPassword}`);
        }
    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        await app.close();
    }
}

bootstrap();
