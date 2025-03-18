import { Column, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ToDoDb } from "./todo.entity";


export class TodoStateEntity {
    @PrimaryGeneratedColumn('increment',{type: 'int' , unsigned: true}) 
    idstate:number;
    @Column({nullable: false, length: 100}) 
    state:'Urgente' | 'Trabajo' | 'personal';
    @OneToMany(() => ToDoDb, (table) => table.id,{
        createForeignKeyConstraints: true,
        onDelete: 'CASCADE',
        eager: true
    })
    @JoinColumn([{name: 'idTodo', referencedColumnName: 'id'}]) idTodo: string;
}