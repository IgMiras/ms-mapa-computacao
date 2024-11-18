import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MapaController } from "./mapa/mapa.controller";
import { MapaModule } from "./mapa/mapa.module";
import { Cidade } from "./mapa/entities/cidade.entity";
import { Curso } from "./mapa/entities/curso.entity";
import { Instituicao } from "./mapa/entities/instituicao.entity";
import { MapaService } from "./mapa/mapa.service";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      // ConfigModule para carregar variáveis de ambiente
      isGlobal: true, // Variáveis disponíveis em todo o app
    }),
    MapaModule,
    DatabaseModule,
  ],
})
export class AppModule {}
