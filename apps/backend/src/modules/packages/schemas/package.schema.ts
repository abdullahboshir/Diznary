
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PackageFeature {
    @Prop({ required: true })
    text: string;

    @Prop({ default: true })
    included: boolean;
}

@Schema({ timestamps: true })
export class Package extends Document {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    price: string;

    @Prop({ required: true })
    priceBDT: string;

    @Prop()
    originalPrice?: string;

    @Prop()
    originalPriceBDT?: string;

    @Prop({ default: "one-time" })
    duration: string;

    @Prop()
    icon?: string;

    @Prop({ default: false })
    popular: boolean;

    @Prop()
    buttonText: string;

    @Prop()
    category?: string;

    @Prop()
    department?: string;

    @Prop({ type: [SchemaFactory.createForClass(PackageFeature)] })
    features: PackageFeature[];
}

export const PackageSchema = SchemaFactory.createForClass(Package);
