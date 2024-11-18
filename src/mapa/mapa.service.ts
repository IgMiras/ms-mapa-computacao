// mapa.service.ts
import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Curso } from "./entities/curso.entity";
import { AvaliacaoEnade } from "./entities/avaliacao_enade.entity";
import { CursoDistribuicaoDto } from "./dto/mapa.dto";

@Injectable()
export class MapaService {
  constructor(
    @Inject("CURSO_REPOSITORY")
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  async getCursosDistribuidos(): Promise<CursoDistribuicaoDto[]> {
    const resultados = await this.cursoRepository
      .createQueryBuilder("c")
      .innerJoin("c.cidade", "ci")
      .innerJoin("c.instituicao", "i")
      .leftJoin("c.programa", "p") // Use leftJoin para permitir programas nulos
      .leftJoin(AvaliacaoEnade, "a", "a.cod_municipio = c.codMunicipio")
      .select([
        "ci.nome AS cidade_nome",
        "ci.latitude AS latitude",
        "ci.longitude AS longitude",
        "i.nome AS instituicao_nome",
        "p.nome AS curso_nome",
        "AVG(a.conceitoEnadeContinuo) AS notaMediaEnade",
      ])
      .groupBy("ci.nome")
      .addGroupBy("ci.latitude")
      .addGroupBy("ci.longitude")
      .addGroupBy("i.nome")
      .addGroupBy("p.nome")
      .getRawMany();

    return resultados.map((resultado) => ({
      cidade_nome: resultado.cidade_nome,
      latitude: parseFloat(resultado.latitude),
      longitude: parseFloat(resultado.longitude),
      instituicao_nome: resultado.instituicao_nome,
      curso_nome: resultado.curso_nome,
      notaMediaEnade: parseFloat(resultado.notaMediaEnade),
    }));
  }
}
