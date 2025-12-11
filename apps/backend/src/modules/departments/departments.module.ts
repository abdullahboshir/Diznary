import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { Department, DepartmentSchema } from './schemas/department.schema';
import { IDepartmentsRepository } from './repositories/departments.repository.interface';
import { DepartmentsMongooseRepository } from './repositories/departments.mongoose.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
    ]),
  ],
  controllers: [DepartmentsController],
  providers: [
    DepartmentsService,
    {
      provide: IDepartmentsRepository,
      useClass: DepartmentsMongooseRepository,
    },
  ],
})
export class DepartmentsModule { }
