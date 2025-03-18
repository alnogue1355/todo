import { Column, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TagDb } from "./tag.entity";


export class TodoStateEntity {
    @PrimaryGeneratedColumn('increment',{type: 'int' , unsigned: true}) id:number;
    @Index()
    @Column({nullable: false, length: 100}) 
    state:'Urgente' | 'Trabajo' | 'personal';
    @OneToOne(() => TagDb, (table) => table.id,{
        createForeignKeyConstraints: true,
        onDelete: 'CASCADE',
        eager: true
    })
    @JoinColumn([{name: 'idTodo', referencedColumnName: 'id'}]) idTodo: string;
}