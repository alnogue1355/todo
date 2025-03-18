import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateDto, UpdateDto } from '../../infrastructure/dto/todo.dto';
import { AppGetAllHandler } from '../../application/queries/appGetAll.handler';
import { AppGetByIdHandler } from '../../application/queries/appGet-byId.handler';
import { AppCreateHandler } from '../../application/commands/appCreate.handler';
import { AppUpdateHandler } from '../../application/commands/appUpdate.handler';
import { AppDeleteHandler } from '../../application/commands/appDelete.handler';
import { IUpdateCommand } from '../../domain/commands/update.comand';

@Controller('todo')
export class ToDoController {
  constructor(
    private readonly appGetAll: AppGetAllHandler,
    private readonly appGetById: AppGetByIdHandler,
    private readonly appCreate: AppCreateHandler,
    private readonly appUpdate: AppUpdateHandler,
    private readonly appDelete: AppDeleteHandler,
  ) {}

  @Get()
  async getAll() {
    return await this.appGetAll.handler();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const result = await this.appGetById.handler({ id });
    if (!result.isSuccess)
      throw new HttpException('Error get record by id', HttpStatus.BAD_REQUEST);
    return result;
  }

  @Post()
  async create(@Body() body: CreateDto) {
    const result = await this.appCreate.handler(body);
    if (!result.isSuccess)
      throw new HttpException('Error saving record', HttpStatus.BAD_REQUEST);
    return result;
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateDto) {
    body.id = id;
    const result = await this.appUpdate.handler({ ...body } as IUpdateCommand);
    if (!result.isSuccess)
      throw new HttpException('Error updating record', HttpStatus.BAD_REQUEST);
    return result;
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this.appDelete.handler({ id });
    if (!result.isSuccess)
      throw new HttpException('Error deleting record', HttpStatus.BAD_REQUEST);
    return result;
  }
}
