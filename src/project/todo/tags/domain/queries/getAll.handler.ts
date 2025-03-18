import { Inject } from '@nestjs/common';

import { Domain } from '../entities/tag.entity';
import {
  ICrudRepository,
  TAG_CRUD_REPOSITORY,
} from '../repositories/tag.repository';

export class GetAllHandler {
  constructor(
    @Inject(TAG_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler(): Promise<Domain[]> {
    const records: Domain[] = await this.repository.findAll();
    return records;
  }
}
