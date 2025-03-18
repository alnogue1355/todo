import { Inject } from '@nestjs/common';
import { Domain } from '../entities/tag.entity';
import {
  ICrudRepository,
  TAG_CRUD_REPOSITORY,
} from '../repositories/tag.repository';
import { GetByIdQuery } from './getById.query';

export class GetByIdHandler {
  constructor(
    @Inject(TAG_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler({ id }: GetByIdQuery): Promise<Domain | null> {
    const item = await this.repository.findById(id);
    return item;
  }
}
