import { Inject } from '@nestjs/common';
import { IResponse } from 'src/common/interfaces';

import { CreateHandler } from '../../domain/commands/create.handler';
import { AppCreateCommand } from './appCreate.comand';

export class AppCreateHandler {
  constructor(@Inject(CreateHandler) private readonly domain: CreateHandler) {}

  async handler(data: AppCreateCommand): Promise<IResponse> {
    const result = await this.domain.handler(data);
    return result;
  }
}
