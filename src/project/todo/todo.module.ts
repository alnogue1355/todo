import { Module } from '@nestjs/common';
import { UserModule } from './users/api/users.module';
import { ToDoModule } from './todo/api/todo.module';
import { TagModule } from './tags/api/tag.module';
import { CategoryModule } from './category/api/category.module';

@Module({
  imports: [ToDoModule, UserModule,TagModule,CategoryModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ToDosModule {}
