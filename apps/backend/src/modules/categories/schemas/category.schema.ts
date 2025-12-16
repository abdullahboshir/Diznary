
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Department } from '../../departments/schemas/department.schema';

@Schema({ timestamps: true })
export class Category extends Document {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ type: Types.ObjectId, ref: 'Department', required: true })
    department: Department | Types.ObjectId;

    @Prop()
    image: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
