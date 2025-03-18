import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('system_category')
export class CategoryDb {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Column({nullable: false,length: 5})
  code:string

  @Column({nullable:true,length: 50})
  name:string

  @Column({nullable: false, length: 100})
  category:string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'UTC_TIMESTAMP()' })
  createdAt: Date;

  @Column({ nullable: true, default: null })
  completedAt?: Date;
}
