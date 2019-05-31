import { Entity, Column, ManyToMany } from "typeorm";
import { Entidad } from "./Enitdad.db";
import { Material } from "./material.entity";
import { Instrumento } from "./instrumento.entity";

@Entity({ schema: 'inventario' })
export class Categoria extends Entidad {
    
    @ManyToMany(type => Material, material => material.categorias)
    materiales: Material[];

    @ManyToMany(type => Material, instrumento => instrumento.categorias)
    instrumentos: Instrumento[];
}