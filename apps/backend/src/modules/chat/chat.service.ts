import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../products/schemas/product.schema';

@Injectable()
export class ChatService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
    ) { }

    async processMessage(message: string): Promise<string> {
        const lowerMsg = message.toLowerCase();

        // --- 1. Language Detection ---
        // Simple check: if message contains Bangla characters
        const isBangla = /[\u0980-\u09FF]/.test(message);

        // --- 2. Smart Conversational Responses (Pre-DB) ---
        // Basic greetings and questions
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

        // --- 3. Specific Logic (Static info) ---
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

        // --- 4. Database Search Logic (Products) ---
        // Clean the search term
        const stopwords = ['a', 'an', 'the', 'is', 'are', 'can', 'you', 'tell', 'me', 'about', 'please', 'details', 'price', 'of', 'i', 'want', 'amr', 'lagbe', 'chai'];
        const tokens = lowerMsg.split(/[\s,?.!]+/).filter(t => t.length > 2 && !stopwords.includes(t));

        if (tokens.length === 0) {
            return isBangla
                ? "দুঃখিত, আমি বুঝতে পারিনি। দয়া করে আপনার প্রশ্নটি একটু অন্যভাবে করুন।"
                : "I'm sorry, didn't catch that. Could you provide more details?";
        }

        // Construct $or query for each token
        const orConditions = tokens.map(token => {
            const sanitized = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape regex special chars
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
            // Format the response
            const intro = isBangla
                ? "আমি আপনার প্রশ্নের সাথে মিল আছে এমন কিছু তথ্য পেয়েছি:\n\n"
                : "Here is what I found based on your request:\n\n";

            const productDetails = products.map(p => {
                const priceInfo = p.price > 0 ? (isBangla ? `দাম: ৳${p.price}` : `Price: $${p.price}`) : (isBangla ? "দাম: বিস্তারিত দেখুন" : "Price: Contact for quote");
                return `**${p.name}**\n${p.description.substring(0, 100)}...\n${priceInfo}`;
            }).join('\n\n');

            return intro + productDetails;
        }

        // 5. Default Fallback
        return isBangla
            ? "দুঃখিত, আমি এই বিষয়ে তথ্য খুঁজে পাইনি। দয়া করে 'Web Development', 'Graphics' বা 'SEO' সম্পর্কে জিজ্ঞাসা করুন।"
            : "I'm sorry, I couldn't find exact information in our database. You can ask about 'Web Development', 'Graphics', or 'SEO'.";
    }
}

