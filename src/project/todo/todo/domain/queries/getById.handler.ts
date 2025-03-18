import { Inject } from '@nestjs/common';
import { Domain } from '../entities/todo.entity';
import {
  ICrudRepository,
  TODO_CRUD_REPOSITORY,
} from '../repositories/todo.repository';
import { GetByIdQuery } from './getById.query';

export class GetByIdHandler {
  constructor(
    @Inject(TODO_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler({ id }: GetByIdQuery): Promise<Domain | null> {
    const item = await this.repository.findById(id);
    return item;
  }
}
