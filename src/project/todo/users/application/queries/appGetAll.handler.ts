import { HttpStatus, Inject } from '@nestjs/common';

import { IResponse } from 'src/common/interfaces';

import { GetAllHandler } from '../../domain/queries/getAll.handler';

export class AppGetAllHandler {
  constructor(@Inject(GetAllHandler) private readonly domain: GetAllHandler) {}
  private readonly optionName = 'user';
  private readonly optionAction = 'get_all';

  async handler(): Promise<IResponse> {
    const result = await this.domain.handler();

    const response: IResponse = {
      code: `${this.optionName}.${this.optionAction}`,
      data: result,
      isSuccess: true,
      message: result.length < 1 ? `No records found.` : 'data returned',
      status: result.length > 0 ? HttpStatus.OK : HttpStatus.NO_CONTENT,
    };

    return response;
  }
}
