import { HttpStatus, Inject } from '@nestjs/common';

import { IResponse } from 'src/common/interfaces';

import { Domain } from '../entities/category.entity';
import {
  ICrudRepository,
  CATEGORY_CRUD_REPOSITORY,
} from '../repositories/category.repository';
import { UpdateCommand } from './update.comand';

export class UpdateHandler {
  private readonly optionName = 'user';
  private readonly optionAction = 'update';

  constructor(
    @Inject(CATEGORY_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler(data: UpdateCommand): Promise<IResponse> {
    const exist = await this.repository.findById(data.id);
    if (!exist) {
      const response: IResponse = {
        code: `${this.optionName}.${this.optionAction}`,
        data: {},
        isSuccess: false,
        message: `Search ${this.optionName} for with term id=${data.id} was not found`,
        status: HttpStatus.CONFLICT,
      };
      return response;
    }

    const result = await this.repository.update(data as Domain);

    if (!result) {
      const response: IResponse = {
        code: `${this.optionName}.${this.optionAction}`,
        data: {},
        isSuccess: false,
        message: 'Error updating record',
        status: HttpStatus.CONFLICT,
      };
      return response;
    }

    const response: IResponse = {
      code: `${this.optionName}.${this.optionAction}`,
      data: {},
      isSuccess: true,
      message: `${this.optionName} updated`,
      status: HttpStatus.ACCEPTED,
    };
    return response;
  }
}
