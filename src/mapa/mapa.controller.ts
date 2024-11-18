import { Controller, Get, Inject } from "@nestjs/common";
import { MapaService } from "./mapa.service";
import { CursoDistribuicaoDto } from "./dto/mapa.dto";

@Controller("mapa")
export class MapaController {
  constructor(private readonly mapaService: MapaService) {}

  @Get()
  async getMapaDados(): Promise<CursoDistribuicaoDto[]> {
    return await this.mapaService.getCursosDistribuidos();
  }
}
