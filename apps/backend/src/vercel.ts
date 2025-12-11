import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express from 'express';

const expressApp = express();
let app: any;

const bootstrap = async (expressInstance: any) => {
    if (!app) {
        app = await NestFactory.create(
            AppModule,
            new ExpressAdapter(expressInstance),
        );
        app.setGlobalPrefix('api/v1');
        app.enableCors({
            origin: true,
            credentials: true,
        });
        await app.init();
    }
    return app;
};

export default async function (req: any, res: any) {
    await bootstrap(expressApp);
    expressApp(req, res);
}
