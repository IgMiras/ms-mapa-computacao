import { Module } from "@nestjs/common";
import { MapaController } from "./mapa.controller";
import { MapaService } from "./mapa.service";
import { DatabaseModule } from "src/database/database.module";
import { mapaProviders } from "./mapa.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [MapaController],
  providers: [...mapaProviders, MapaService],
})
export class MapaModule {}
