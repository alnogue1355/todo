import { Inject } from '@nestjs/common';

import { Domain } from '../entities/user.entity';
import {
  ICrudRepository,
  USER_CRUD_REPOSITORY,
} from '../repositories/user.repository';

export class GetAllHandler {
  constructor(
    @Inject(USER_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler(): Promise<Domain[]> {
    const records: Domain[] = await this.repository.findAll();
    return records;
  }
}
