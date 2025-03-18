import { Module, Scope } from '@nestjs/common';

import { CATEGORY_CRUD_REPOSITORY } from '../domain/repositories/category.repository';
import { CategoryController } from './controllers/category.controller';
import { CrudRepository } from '../infrastructure/repositories/typeorm/mariadb/category-crud.repository.impl';
import { AppCreateHandler } from '../application/commands/appCreate.handler';
import { AppUpdateHandler } from '../application/commands/appUpdate.handler';
import { AppDeleteHandler } from '../application/commands/appDelete.handler';
import { AppGetAllHandler } from '../application/queries/appGetAll.handler';
import { AppGetByIdHandler } from '../application/queries/appGet-byId.handler';
import { CreateHandler } from '../domain/commands/create.handler';
import { UpdateHandler } from '../domain/commands/update.handler';
import { DeleteHandler } from '../domain/commands/delete.handler';
import { GetAllHandler } from '../domain/queries/getAll.handler';
import { GetByIdHandler } from '../domain/queries/getById.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryDb } from '../infrastructure/repositories/typeorm/mariadb/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryDb])],
  controllers: [CategoryController],
  providers: [
    {
      provide: CATEGORY_CRUD_REPOSITORY,
      useClass: CrudRepository,
      scope: Scope.REQUEST,
    },

    AppCreateHandler,
    AppUpdateHandler,
    AppDeleteHandler,
    AppGetAllHandler,
    AppGetByIdHandler,
    AppCreateHandler,
    CreateHandler,
    UpdateHandler,
    DeleteHandler,
    GetAllHandler,
    GetByIdHandler,
  ],
  exports: [],
})
export class CategoryModule {}
