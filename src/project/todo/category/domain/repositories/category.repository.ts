import { Domain } from '../entities/category.entity';

export const CATEGORY_CRUD_REPOSITORY = Symbol('ICrudRepository');

export interface ICrudRepository {
  findAll(): Promise<Domain[]>;
  findById(id: number): Promise<Domain | null>;
  create(option: Domain): Promise<number | null>;
  update(option: Domain): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
