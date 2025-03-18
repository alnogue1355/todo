import { HttpStatus, Inject } from '@nestjs/common';

import { IResponse } from 'src/common/interfaces';

import {
  ICrudRepository,
  USER_CRUD_REPOSITORY,
} from '../repositories/user.repository';
import { DeleteCommand } from './delete.comand';

export class DeleteHandler {
  private readonly optionName = 'user';
  private readonly optionAction = 'delete';
  constructor(
    @Inject(USER_CRUD_REPOSITORY) private readonly repository: ICrudRepository,
  ) {}

  async handler({ id }: DeleteCommand): Promise<IResponse> {
    if (!id) {
      const response: IResponse = {
        code: `${this.optionName}.${this.optionAction}`,
        data: {},
        isSuccess: false,
        message: `required fields`,
        status: HttpStatus.CONFLICT,
      };
      return response;
    }
    const exist = await this.repository.findById(id);
    if (!exist) {
      const response: IResponse = {
        code: `${this.optionName}.${this.optionAction}`,
        data: {},
        isSuccess: false,
        message: `Search ${this.optionName} for with term id=${id} was not found`,
        status: HttpStatus.NOT_FOUND,
      };
      return response;
    }

    const result = await this.repository.delete(id);

    if (!result) {
      const response: IResponse = {
        code: `${this.optionName}.${this.optionAction}`,
        data: { id: result },
        isSuccess: false,
        message: 'Error deleting record',
        status: HttpStatus.CONFLICT,
      };
      return response;
    }

    const response: IResponse = {
      code: `${this.optionName}.${this.optionAction}`,
      data: { id: result },
      isSuccess: true,
      message: `${this.optionName} deleted`,
      status: HttpStatus.ACCEPTED,
    };
    return response;
  }
}
