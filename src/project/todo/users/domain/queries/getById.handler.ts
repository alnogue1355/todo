import { Inject } from '@nestjs/common';
import { Domain } from '../entities/user.entity';
import {
  ICrudRepository,
  USER_CRUD_REPOSITORY,
} from '../repositories/user.repository';
import { GetByIdQuery } from './getById.query';

export class GetByIdHandler {
  constructor(
    @Inject(USER_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler({ id }: GetByIdQuery): Promise<Domain | null> {
    const item = await this.repository.findById(id);
    return item;
  }
}
