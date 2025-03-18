import { Column, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ToDoDb } from "./todo.entity";


export class TodoStateEntity {
    @PrimaryGeneratedColumn('increment',{type: 'int' , unsigned: true}) id:number;
    @Index()
    @Column({nullable: false, length: 100}) 
    state:'Urgente' | 'Trabajo' | 'personal';
    @OneToOne(() => ToDoDb, (table) => table.id,{
        createForeignKeyConstraints: true,
        onDelete: 'CASCADE',
        eager: true
    })
    @JoinColumn([{name: 'idTodo', referencedColumnName: 'id'}]) idTodo: string;
}