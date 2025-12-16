"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schema_1 = require("../products/schemas/product.schema");
let ChatService = class ChatService {
    productModel;
    constructor(productModel) {
        this.productModel = productModel;
    }
    async processMessage(message) {
        const lowerMsg = message.toLowerCase();
        const isBangla = /[\u0980-\u09FF]/.test(message);
        if (lowerMsg.match(/^(hi|hello|hey|salam|assalam|hy)$/)) {
            return isBangla
                ? "স্বাগতম! আমি আপনাকে কীভাবে সাহায্য করতে পারি? আমাদের সার্ভিস বা প্যাকেজ সম্পর্কে জিজ্ঞাসা করতে পারেন।"
                : "Hello! How can I help you today? You can ask about our services, pricing, or specific packages.";
        }
        if (lowerMsg.includes("who are you") || lowerMsg.includes("apni ke") || lowerMsg.includes("tumi ke")) {
            return isBangla
                ? "আমি ডিজনারির অটোমেটেড অ্যাসিস্ট্যান্ট। আমি আপনার প্রশ্নের উত্তর দিতে এখানে আছি।"
                : "I am Diznary's automated assistant. I'm here to answer your questions about our services 24/7.";
        }
        if (lowerMsg.includes("thank") || lowerMsg.includes("dhonnobad")) {
            return isBangla
                ? "আপনাকে ধন্যবাদ! আর কোনো সাহায্য লাগলে বলবেন।"
                : "You're welcome! Let me know if you need anything else.";
        }
        if (lowerMsg.includes('contact') || lowerMsg.includes('number') || lowerMsg.includes('email') || lowerMsg.includes('jogajog')) {
            return isBangla
                ? "আমাদের সাথে যোগাযোগ করতে পারেন:\nফোন: +880123456789\nইমেইল: support@diznary.com"
                : "You can reach us at:\nPhone: +880123456789\nEmail: support@diznary.com";
        }
        if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('dam') || lowerMsg.includes('khoroch')) {
            return isBangla
                ? "আমাদের প্যাকেজগুলো সাশ্রয়ী মূল্যের। আপনি কি নির্দিষ্ট কোনো সার্ভিস (যেমন: 'Web Development', 'Graphics') এর দাম জানতে চান?"
                : "Our packages are competitively priced. Do you have a specific service in mind? (e.g., 'Web Development', 'Graphics', 'SEO').";
        }
        const stopwords = ['a', 'an', 'the', 'is', 'are', 'can', 'you', 'tell', 'me', 'about', 'please', 'details', 'price', 'of', 'i', 'want', 'amr', 'lagbe', 'chai'];
        const tokens = lowerMsg.split(/[\s,?.!]+/).filter(t => t.length > 2 && !stopwords.includes(t));
        if (tokens.length === 0) {
            return isBangla
                ? "দুঃখিত, আমি বুঝতে পারিনি। দয়া করে আপনার প্রশ্নটি একটু অন্যভাবে করুন।"
                : "I'm sorry, didn't catch that. Could you provide more details?";
        }
        const orConditions = tokens.map(token => {
            const sanitized = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return [
                { name: { $regex: sanitized, $options: 'i' } },
                { description: { $regex: sanitized, $options: 'i' } },
                { category: { $regex: sanitized, $options: 'i' } }
            ];
        }).flat();
        const products = await this.productModel.find({
            $or: orConditions,
            isActive: true
        }).limit(3).exec();
        if (products.length > 0) {
            const intro = isBangla
                ? "আমি আপনার প্রশ্নের সাথে মিল আছে এমন কিছু তথ্য পেয়েছি:\n\n"
                : "Here is what I found based on your request:\n\n";
            const productDetails = products.map(p => {
                const priceInfo = p.price > 0 ? (isBangla ? `দাম: ৳${p.price}` : `Price: $${p.price}`) : (isBangla ? "দাম: বিস্তারিত দেখুন" : "Price: Contact for quote");
                return `**${p.name}**\n${p.description.substring(0, 100)}...\n${priceInfo}`;
            }).join('\n\n');
            return intro + productDetails;
        }
        return isBangla
            ? "দুঃখিত, আমি এই বিষয়ে তথ্য খুঁজে পাইনি। দয়া করে 'Web Development', 'Graphics' বা 'SEO' সম্পর্কে জিজ্ঞাসা করুন।"
            : "I'm sorry, I couldn't find exact information in our database. You can ask about 'Web Development', 'Graphics', or 'SEO'.";
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChatService);
//# sourceMappingURL=chat.service.js.map