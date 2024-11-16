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

@Module({
  imports: [
    // ConfigModule para carregar variáveis de ambiente
    ConfigModule.forRoot({
      isGlobal: true, // Variáveis disponíveis em todo o app
    }),
    // TypeOrmModule configurado diretamente via código
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST || "db",
      port: +process.env.DATABASE_PORT || 3307,
      username: process.env.DATABASE_USERNAME || "root",
      password: process.env.DATABASE_PASSWORD || "password",
      database: process.env.DATABASE_NAME || "mydatabase",
      entities: [Cidade, Curso, Instituicao], // As entidades usadas no TypeORM
      synchronize: true, // Usar apenas em desenvolvimento
    }),
    MapaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
