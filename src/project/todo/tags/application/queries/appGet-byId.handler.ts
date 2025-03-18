import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IResponse } from 'src/common/interfaces';
import { GetByIdHandler } from '../../domain/queries/getById.handler';
import { AppGetByIdQuery } from './appGet-byId.query';

@Injectable()
export class AppGetByIdHandler {
  constructor(
    @Inject(GetByIdHandler) private readonly domain: GetByIdHandler,
  ) {}

  private readonly optionName = 'user';
  private readonly optionAction = 'get_id';

  async handler({ id }: AppGetByIdQuery): Promise<IResponse> {
    const result = await this.domain.handler({ id });
    if (!result) {
      const response: IResponse = {
        code: `${this.optionName}.${this.optionAction}`,
        data: {},
        isSuccess: false,
        message: `Search for ${this.optionName} with term code=${id} was not found`,
        status: HttpStatus.NOT_FOUND,
      };
      return response;
    }
    const response: IResponse = {
      code: `${this.optionName}.${this.optionAction}`,
      data: result,
      isSuccess: true,
      message: 'User found',
      status: HttpStatus.ACCEPTED,
    };
    return response;
  }
}
