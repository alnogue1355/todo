import { HttpStatus, Inject } from '@nestjs/common';

import { IResponse } from 'src/common/interfaces';

import { Domain } from '../entities/category.entity';
import {
  ICrudRepository,
  CATEGORY_CRUD_REPOSITORY,
} from '../repositories/category.repository';
import { CreateCommand } from './create.comand';

export class CreateHandler {
  private readonly optionName = 'todo';
  private readonly optionAction = 'create';

  constructor(
    @Inject(CATEGORY_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler(data: CreateCommand): Promise<IResponse> {
    const toSave = { ...data };

    const result = await this.repository.create(toSave as Domain);

    if (!result) {
      const response: IResponse = {
        code: `${this.optionName}.${this.optionAction}`,
        data: { id: result },
        isSuccess: false,
        message: 'Error writing record',
        status: HttpStatus.CONFLICT,
      };
      return response;
    }

    const response: IResponse = {
      code: `${this.optionName}.${this.optionAction}`,
      data: { id: result },
      isSuccess: true,
      message: `${this.optionName} created`,
      status: HttpStatus.CREATED,
    };
    return response;
  }
}
