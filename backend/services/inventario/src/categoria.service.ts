import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private readonly categoriaRepo: Repository<Categoria>,
    ){}

    async findAll(): Promise<Categoria[]>{
        return await this.categoriaRepo.find();
    }

    async findByInstrumento(): Promise<Categoria[]>{
        return await this.categoriaRepo.find({where: { estado: 'Activada' }})
    }

}
