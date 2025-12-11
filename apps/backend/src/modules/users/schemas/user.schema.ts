
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserRole {
    ADMIN = 'admin',
    customer = 'customer',
}

@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password?: string;

    @Prop({ required: true, enum: UserRole, default: UserRole.customer })
    role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
