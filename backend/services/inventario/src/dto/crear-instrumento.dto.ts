import { CrearCategoriaDto } from "./crear-categoria.dto";

export class CrearInstrumentoDto{
    codigo: string;
    nombre: string;
    estado: string;
    resumen: string;
    condicion: string;
    marcaId: number;
    categorias: any[]
}