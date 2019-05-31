import { Test, TestingModule } from '@nestjs/testing';
import { InstrumentoService } from './instrumento.service';
import { Instrumento } from './entities/instrumento.entity';
import { getRepositoryToken } from '@nestjs/typeorm';



describe('InstrumentoService', () => {
  let service: InstrumentoService;
  const mockRepository = {}
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InstrumentoService,
        {
          provide: getRepositoryToken(Instrumento),
          useValue: mockRepository,
        }
      ],
    }).compile();

    service = module.get<InstrumentoService>(InstrumentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
