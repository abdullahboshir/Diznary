"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const express_1 = __importDefault(require("express"));
const expressApp = (0, express_1.default)();
let app;
const bootstrap = async (expressInstance) => {
    if (!app) {
        app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
        app.setGlobalPrefix('api/v1');
        app.enableCors({
            origin: true,
            credentials: true,
        });
        await app.init();
    }
    return app;
};
async function default_1(req, res) {
    await bootstrap(expressApp);
    expressApp(req, res);
}
//# sourceMappingURL=vercel.js.map