import { Entity, Column } from "typeorm";
import { Entidad } from "./Enitdad.db";

@Entity({ schema: 'inventario' })
export class Producto extends Entidad {

    @Column('text')
    resumen: string;

    @Column()
    valorMateriales: number;

    @Column()
    valorCostos: number;
}