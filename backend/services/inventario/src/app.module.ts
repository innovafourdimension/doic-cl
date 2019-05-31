import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities/categoria.entity';
import { Instrumento } from './entities/instrumento.entity';
import { Marca } from './entities/marca.entity';
import { Material } from './entities/material.entity';
import { MovimientoStockMaterial } from './entities/movimiento-stock-material.entity';
import { Producto } from './entities/producto.entity';
import { Tipo } from './entities/tipo.entity';
import { UnidadMedida } from './entities/unidad-medida.entity';
import { InstrumentoService } from './instrumento.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: 'doitclick',
      password: 'secreto',
      database: 'doitclick',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    }),
    TypeOrmModule.forFeature([
      Categoria, 
      Instrumento, 
      Marca, 
      Material, 
      MovimientoStockMaterial, 
      Producto, 
      Tipo, 
      UnidadMedida
    ]),
  ],
  controllers: [AppController],
  providers: [
    CategoriaService, 
    InstrumentoService,
  ],
})
export class AppModule {}
