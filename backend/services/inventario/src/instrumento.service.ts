import { Injectable } from '@nestjs/common';
import { Instrumento } from './entities/instrumento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearInstrumentoDto } from './dto/crear-instrumento.dto';
import { Categoria } from './entities/categoria.entity';
import { Marca } from './entities/marca.entity';
import { IInstrumentoResultObject } from './interfaces/instrumento-result-object.interface'

@Injectable()
export class InstrumentoService {

    constructor(
        @InjectRepository(Instrumento)
        private readonly instrumentoRepo: Repository<Instrumento>,

        @InjectRepository(Categoria)
        private readonly categoriaRepo: Repository<Categoria>,

        @InjectRepository(Marca)
        private readonly marcaRepo: Repository<Marca>,
    ){}


    async findAll(query: any): Promise<IInstrumentoResultObject>{

        let qb = this.instrumentoRepo.createQueryBuilder('instrumento');

        qb.where('1 = 1');
        
        if('marca' in query){
            qb.andWhere('instrumento.marcaId = :marca', { marca: query.marca })
        }
        
        const total = await qb.getCount();

        if ('limit' in query) {
            qb.limit(query.limit);
        }

        if('offset' in query){
            qb.offset(query.offset);
        }

        const instrumentos = await qb.getMany();

        return { total, instrumentos }
    }

    async save(instrumentoData: CrearInstrumentoDto): Promise<Instrumento> {

        const instrumento = new Instrumento();
        
        instrumento.codigo = instrumentoData.codigo;
        instrumento.condicion = instrumentoData.condicion;
        instrumento.estado = instrumentoData.estado;
        instrumento.nombre = instrumentoData.nombre;
        instrumento.resumen = instrumentoData.resumen;

        const marca = await this.marcaRepo.findOne({ where: { id: instrumentoData.marcaId }});
        instrumento.marca = marca; 

        instrumentoData.categorias.forEach(async (idCategoria) => {
            const categoria = await this.categoriaRepo.findOne({where: {id: idCategoria}});
            instrumento.categorias.push(categoria);
        });
        
        return await this.instrumentoRepo.create(instrumento);
    }

    async actualizar(id: number, instrumentoData: CrearInstrumentoDto){
        const instrumento = await this.instrumentoRepo.findOne({where: {id}});

        instrumento.codigo = instrumentoData.codigo;
        instrumento.condicion = instrumentoData.condicion;
        instrumento.estado = instrumentoData.estado;
        instrumento.nombre = instrumentoData.nombre;
        instrumento.resumen = instrumentoData.resumen;

        const marca = await this.marcaRepo.findOne({ where: { id: instrumentoData.marcaId } });
        instrumento.marca = marca;

        instrumentoData.categorias.forEach(async (idCategoria) => {
            
            if(instrumento.categorias.findIndex((catg) => catg.id === idCategoria) === -1){
                const categoria = await this.categoriaRepo.findOne({ where: { id: idCategoria } });
                instrumento.categorias.push(categoria);
            }
        });

    }

    async eliminar(id: number){
        this.instrumentoRepo.delete({id});
    }

    
    
}
