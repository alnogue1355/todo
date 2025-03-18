import { Inject } from '@nestjs/common';

import { Domain } from '../entities/category.entity';
import {
  ICrudRepository,
  CATEGORY_CRUD_REPOSITORY,
} from '../repositories/category.repository';

export class GetAllHandler {
  constructor(
    @Inject(CATEGORY_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler(): Promise<Domain[]> {
    const records: Domain[] = await this.repository.findAll();
    return records;
  }
}
