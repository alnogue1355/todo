import { Inject } from '@nestjs/common';
import { IResponse } from 'src/common/interfaces';
import { AppUpdateCommand } from './appUpdate.comand';
import { UpdateHandler } from '../../domain/commands/update.handler';

export class AppUpdateHandler {
  constructor(@Inject(UpdateHandler) private readonly domain: UpdateHandler) {}
  async handler(data: AppUpdateCommand): Promise<IResponse> {
    const result = await this.domain.handler(data);
    return result;
  }
}
