import { Entity, Column } from "typeorm";
import { Entidad } from "./Enitdad.db";

@Entity({ schema: 'inventario' })
export class Tipo extends Entidad {}