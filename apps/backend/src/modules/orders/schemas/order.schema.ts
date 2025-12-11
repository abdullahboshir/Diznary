
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Product } from '../../products/schemas/product.schema';

export enum OrderStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}

@Schema()
export class OrderItem {
    @Prop({ required: true })
    productId: string;

    @Prop({ required: true, default: 1 })
    quantity: number;

    @Prop({ required: true })
    price: number;
}

@Schema({ timestamps: true })
export class Order extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: User | Types.ObjectId;

    @Prop({ type: [SchemaFactory.createForClass(OrderItem)], required: true })
    items: OrderItem[];

    @Prop({ required: true })
    totalAmount: number;

    @Prop({ enum: OrderStatus, default: OrderStatus.PENDING })
    status: OrderStatus;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
