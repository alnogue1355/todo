import { IResponse } from 'src/common/interfaces';

import { Inject } from '@nestjs/common';
import { DeleteHandler } from '../../domain/commands/delete.handler';
import { AppDeleteCommand } from './appDelete.comand';

export class AppDeleteHandler {
  constructor(@Inject(DeleteHandler) private readonly domain: DeleteHandler) {}

  async handler({ id }: AppDeleteCommand): Promise<IResponse> {
    const result = await this.domain.handler({ id });
    return result;
  }
}
