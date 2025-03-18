import { UsersDb } from 'src/project/todo/users/infrastructure/repositories/typeorm/mariadb/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('system_tags')
export class TagDb {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Column({nullable: false,length: 5})
  code:string

  @Column({nullable:true,length: 50})
  name:string

  @Column({ nullable: true, default: null })
  completedAt?: Date;
}
