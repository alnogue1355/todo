import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('system_users')
export class UsersDb {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Index()
  @Column({ nullable: false, length: 10 })
  user: string;

  @Column({ nullable: false, length: 50 })
  name: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'UTC_TIMESTAMP()' })
  createdAt: Date;
}
