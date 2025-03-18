import { Injectable, Scope } from '@nestjs/common';
import { QueryFailedError, Repository } from 'typeorm';

import { Domain } from '../../../../domain/entities/tag.entity';
import { ICrudRepository } from '../../../../domain/repositories/tag.repository';
import { TagDb } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable({ scope: Scope.REQUEST })
export class CrudRepository implements ICrudRepository {
  constructor(
    @InjectRepository(TagDb)
    private readonly respository: Repository<TagDb>,
  ) {}

  private toDomain(entity: TagDb): Domain {
    return new Domain({
      ...entity,
    });
  }

  private toEntity(data: Domain): TagDb {
    return { ...data } as unknown as TagDb;
  }

  async findAll(): Promise<Domain[]> {
    const records = await this.respository.find();
    return records.map((record) => this.toDomain(record));
  }

  async findById(id: number): Promise<Domain | null> {
    const record = await this.respository.findOneBy({ id });
    return record
      ? Promise.resolve(this.toDomain(record))
      : Promise.resolve(null);
  }

  async create(record: Domain): Promise<number | null> {
    const entity = this.respository.create(this.toEntity({ ...record }));
    try {
      await this.respository.save(entity);
      return entity.id;
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.message.includes('Duplicate entry')
      ) {
        return null;
      }
      throw error;
    }
  }

  async update(data: Domain): Promise<boolean> {
    const { id,...record } = data; // eslint-disable-line @typescript-eslint/no-unused-vars
    if (!id) return false;
    try {
      const updated = await this.respository.update(id, { ...record });
      if (updated.affected === 0) return false;
      return true;
    } catch {
      return false;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const deleteResult = await this.respository.delete(id);
      if (deleteResult && deleteResult.affected === 0) return false;
      return true;
    } catch {
      return false;
    }
  }
}
