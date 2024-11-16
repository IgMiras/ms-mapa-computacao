import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';

@Injectable()
export class MapaService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  async getCursosDistribuidos() {
    return await this.cursoRepository
      .createQueryBuilder('curso')
      .innerJoinAndSelect('curso.instituicao', 'instituicao')
      .innerJoinAndSelect('instituicao.cidade', 'cidade')
      .select([
        'cidade.nome AS cidade_nome',
        'cidade.latitude AS latitude',
        'cidade.longitude AS longitude',
        'instituicao.nome AS instituicao_nome',
        'curso.nome AS curso_nome',
      ])
      .getRawMany();
  }
}
