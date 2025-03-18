import { Domain } from '../entities/todo.entity';

export const TODO_CRUD_REPOSITORY = Symbol('ICrudRepository');

export interface ICrudRepository {
  findAll(): Promise<Domain[]>;
  findById(id: number): Promise<Domain | null>;
  findByUser(user: number): Promise<Domain | null>;
  create(option: Domain): Promise<number | null>;
  update(option: Domain): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
