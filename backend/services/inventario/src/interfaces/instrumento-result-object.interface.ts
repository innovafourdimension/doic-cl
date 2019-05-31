import { Instrumento } from "src/entities/instrumento.entity";

export interface IInstrumentoResultObject {
    total: number;
    instrumentos: Instrumento[]
}