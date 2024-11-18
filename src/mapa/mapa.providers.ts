import { DataSource } from "typeorm";
import { Cidade } from "./entities/cidade.entity";
import { Curso } from "./entities/curso.entity";
import { Instituicao } from "./entities/instituicao.entity";
import { AvaliacaoEnade } from "./entities/avaliacao_enade.entity";
import { CursoPrograma } from "./entities/curso_programa.entity";

export const mapaProviders = [
  {
    provide: "CURSO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Curso),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "CIDADE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cidade),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "INSTITUICAO_REPOSITORY",
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Instituicao),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "AVALIACAO_ENADE_REPOSITORY",
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AvaliacaoEnade),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "CURSO_PROGRAMA_REPOSITORY",
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CursoPrograma),
    inject: ["DATA_SOURCE"],
  },
];
