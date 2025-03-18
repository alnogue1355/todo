import { Module } from '@nestjs/common';
import { ToDosModule } from './todo/todo.module';

@Module({
  imports: [ToDosModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ProjectModule {}
