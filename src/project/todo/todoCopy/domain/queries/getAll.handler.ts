import { Inject } from '@nestjs/common';

import { Domain } from '../entities/todo.entity';
import {
  ICrudRepository,
  TODO_CRUD_REPOSITORY,
} from '../repositories/todo.repository';

export class GetAllHandler {
  constructor(
    @Inject(TODO_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler(): Promise<Domain[]> {
    const records: Domain[] = await this.repository.findAll();
    return records;
  }
}
