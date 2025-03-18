import { Module, Scope } from '@nestjs/common';

import { TODO_CRUD_REPOSITORY } from '../domain/repositories/todo.repository';
import { ToDoController } from './controllers/todo.controller';
import { CrudRepository } from '../infrastructure/repositories/typeorm/mariadb/todo-crud.repository.impl';
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
import { ToDoDb } from '../infrastructure/repositories/typeorm/mariadb/entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoDb])],
  controllers: [ToDoController],
  providers: [
    {
      provide: TODO_CRUD_REPOSITORY,
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
export class ToDoModule {}
