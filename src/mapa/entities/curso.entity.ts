import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Instituicao } from './instituicao.entity';

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Instituicao, (instituicao) => instituicao.cursos)
  instituicao: Instituicao;
}
