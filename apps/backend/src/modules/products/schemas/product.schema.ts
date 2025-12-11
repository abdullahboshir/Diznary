
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum ProductCategory {
    GRAPHICS_DESIGN = 'Graphics Design',
    DIGITAL = 'Digital',
    WEB_DEVELOPMENT = 'Web Development',
}

@Schema({ timestamps: true })
export class Product extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: false })
    priceUSD?: number;

    @Prop({ required: false })
    priceBDT?: number;

    @Prop({ required: true, enum: ProductCategory })
    category: ProductCategory;

    @Prop([String])
    images: string[];

    @Prop({ default: true })
    isActive: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
