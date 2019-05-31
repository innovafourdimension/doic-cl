import {Entity, Column, OneToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { Entidad } from "./Enitdad.db";
import { Marca } from "./marca.entity";
import { Categoria } from "./categoria.entity";

@Entity({ schema: 'inventario' })
export class Material extends Entidad
{
    @Column()
    precio: number;

    @OneToOne(type => Marca)
    @JoinColumn()
    marca: Marca;

    @ManyToMany(type => Categoria, categoria => categoria.materiales)
    @JoinTable()
    categorias: Categoria[];
}