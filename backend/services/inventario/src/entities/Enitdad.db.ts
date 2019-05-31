import { PrimaryGeneratedColumn, Column } from "typeorm";

export class Entidad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    nombre: string;

    @Column()
    estado: string;
}