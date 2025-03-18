import { Module, Scope } from '@nestjs/common';

import { TAG_CRUD_REPOSITORY } from '../domain/repositories/tag.repository';
import { TagController } from './controllers/tag.controller';
import { CrudRepository } from '../infrastructure/repositories/typeorm/mariadb/tag-crud.repository.impl';
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
import { TagDb } from '../infrastructure/repositories/typeorm/mariadb/entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagDb])],
  controllers: [TagController],
  providers: [
    {
      provide: TAG_CRUD_REPOSITORY,
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
export class TagModule {}
