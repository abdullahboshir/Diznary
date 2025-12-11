import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { IProductsRepository } from './repositories/products.repository.interface';
import { ProductsMongooseRepository } from './repositories/products.mongoose.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: IProductsRepository,
      useClass: ProductsMongooseRepository,
    },
  ],
})
export class ProductsModule { }
