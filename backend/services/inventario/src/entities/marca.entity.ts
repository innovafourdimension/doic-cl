import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Entidad } from "./Enitdad.db";

@Entity({ schema: 'inventario' })
export class Marca extends Entidad{}