import { Module } from '@nestjs/common';
import { UserModule } from './users/api/users.module';
import { ToDoModule } from './todo/api/todo.module';

@Module({
  imports: [ToDoModule, UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ToDosModule {}
