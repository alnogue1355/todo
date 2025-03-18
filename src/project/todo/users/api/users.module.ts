import { Module, Scope } from '@nestjs/common';

import { USER_CRUD_REPOSITORY } from '../domain/repositories/user.repository';
import { UserController } from './controllers/user.controller';
import { CrudRepository } from '../infrastructure/repositories/typeorm/mariadb/user-crud.repository.impl';
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
import { EntityDomainValidations } from '../domain/validations/validate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersDb } from '../infrastructure/repositories/typeorm/mariadb/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersDb])],
  controllers: [UserController],
  providers: [
    {
      provide: USER_CRUD_REPOSITORY,
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
    EntityDomainValidations,
  ],
  exports: [],
})
export class UserModule {}
