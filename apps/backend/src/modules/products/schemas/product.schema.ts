
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Department } from '../../departments/schemas/department.schema';
import { Category } from '../../categories/schemas/category.schema';

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

    @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
    category: Category | Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Department' })
    department: Department | Types.ObjectId;

    @Prop([String])
    images: string[];

    @Prop({ default: true })
    isActive: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
