import { Inject } from '@nestjs/common';
import { Domain } from '../entities/category.entity';
import {
  ICrudRepository,
  CATEGORY_CRUD_REPOSITORY,
} from '../repositories/category.repository';
import { GetByIdQuery } from './getById.query';

export class GetByIdHandler {
  constructor(
    @Inject(CATEGORY_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler({ id }: GetByIdQuery): Promise<Domain | null> {
    const item = await this.repository.findById(id);
    return item;
  }
}
