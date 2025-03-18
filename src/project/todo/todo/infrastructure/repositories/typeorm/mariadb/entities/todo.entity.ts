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

@Entity('system_todo')
export class ToDoDb {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Index()
  @Column({ nullable: false, length: 50 })
  title: string;

  @Column({ nullable: false, length: 100 })
  description: string;

  @Column({ nullable: false, length: 100 })
  detail: string;

  @ManyToOne(() => UsersDb, (user) => user.id, {
    onDelete: 'NO ACTION',
    eager: true,
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  userId: UsersDb;

  @Column({ nullable: false, default: false })
  completed: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'UTC_TIMESTAMP()' })
  createdAt: Date;

  @Column({ nullable: true, default: null })
  completedAt?: Date;
}
