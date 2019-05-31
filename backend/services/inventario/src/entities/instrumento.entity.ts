import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Entidad } from "./Enitdad.db";
import { Marca } from "./marca.entity";
import { Categoria } from "./categoria.entity";

@Entity({ schema: 'inventario' })
export class Instrumento extends Entidad {


    @Column("text")
    resumen: string;

    @Column()
    condicion: string;

    @OneToOne(type => Marca)
    @JoinColumn()
    marca: Marca;

    @ManyToMany(type => Categoria, categoria => categoria.instrumentos)
    @JoinTable()
    categorias: Categoria[];
}