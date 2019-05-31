import { Controller, Get } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { Instrumento } from './entities/instrumento.entity';

@Controller()
export class AppController {
  constructor(
    private readonly instrumentoService: InstrumentoService,
  ) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  
  @Get('instrumentos')
  async devInstrumentofindAll(): Promise<Instrumento[]>{
    return await this.instrumentoService.findAll();
  }

  
}
