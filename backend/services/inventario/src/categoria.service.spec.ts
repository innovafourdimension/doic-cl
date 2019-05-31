import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaService } from './categoria.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';

const mockRepository = {}  

describe('CategoriaService', () => {
  let service: CategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriaService,
        {
          provide: getRepositoryToken(Categoria),
          useValue: mockRepository,
        }
      ],
    }).compile();

    service = module.get<CategoriaService>(CategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get ObtenerTodas', async () => {
    let result: Categoria[] = [
      {
        id: 1,
        codigo: 'XX1',
        estado: 'A',
        nombre: 'Mi Categoria',
        instrumentos: [],
        materiales: []
      }
    ]  
    jest.spyOn(service, "findAll").mockImplementation(async () => result);

    expect(await service.findAll()).toBe(result);
  });


  it('should get obtenerDeInstrumento', async () => {
    let result: Categoria[] = [
      {
        id: 1,
        codigo: 'XX1',
        estado: 'A',
        nombre: 'Mi Categoria',
        instrumentos: [],
        materiales: []
      }
    ]
    jest.spyOn(service, "findByInstrumento").mockImplementation(async () => result);

    expect(await service.findByInstrumento()).toBe(result);
  });

});
