import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MapaController } from "./mapa.controller";
import { MapaService } from "./mapa.service";
import { Curso } from "./entities/curso.entity";
import { Instituicao } from "./entities/instituicao.entity";
import { Cidade } from "./entities/cidade.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Curso, Instituicao, Cidade])],
  controllers: [MapaController],
  providers: [MapaService, MapaController],
})
export class MapaModule {}
