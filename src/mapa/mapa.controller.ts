import { Controller, Get } from '@nestjs/common';
import { MapaService } from './mapa.service';

@Controller('mapa')
export class MapaController {
  constructor(private readonly mapaService: MapaService) {}

  @Get()
  async getMapaDados() {
    return await this.mapaService.getCursosDistribuidos();
  }
}
