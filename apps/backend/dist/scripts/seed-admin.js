"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const users_service_1 = require("../modules/users/users.service");
const user_schema_1 = require("../modules/users/schemas/user.schema");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const usersService = app.get(users_service_1.UsersService);
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@diznary.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'password123';
    try {
        const existingAdmin = await usersService.findByEmail(adminEmail);
        if (existingAdmin) {
            console.log('Admin user already exists.');
            if (existingAdmin.role !== user_schema_1.UserRole.ADMIN) {
                console.log('Updating existing admin role to ADMIN...');
                await usersService.update(existingAdmin._id.toString(), { role: user_schema_1.UserRole.ADMIN });
                console.log('Admin role updated.');
            }
        }
        else {
            console.log('Creating admin user...');
            await usersService.create({
                firstName: 'System',
                lastName: 'Admin',
                email: adminEmail,
                password: adminPassword,
                role: user_schema_1.UserRole.ADMIN,
            });
            console.log(`Admin created successfully: ${adminEmail} / ${adminPassword}`);
        }
    }
    catch (error) {
        console.error('Error seeding admin:', error);
    }
    finally {
        await app.close();
    }
}
bootstrap();
//# sourceMappingURL=seed-admin.js.map