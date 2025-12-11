"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectCountry = void 0;
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const detectCountry = (ip) => {
    if (ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168.')) {
        return 'BD';
    }
    const geo = geoip_lite_1.default.lookup(ip);
    return geo ? geo.country : 'US';
};
exports.detectCountry = detectCountry;
//# sourceMappingURL=geo.util.js.map