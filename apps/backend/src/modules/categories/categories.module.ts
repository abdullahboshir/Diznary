import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category, CategorySchema } from './schemas/category.schema';
import { ICategoriesRepository } from './repositories/categories.repository.interface';
import { CategoriesMongooseRepository } from './repositories/categories.mongoose.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    {
      provide: ICategoriesRepository,
      useClass: CategoriesMongooseRepository,
    },
  ],
})
export class CategoriesModule { }
