import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Cidade } from './cidade.entity';
import { Curso } from './curso.entity';

@Entity('instituicoes')
export class Instituicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Cidade, (cidade) => cidade.instituicoes)
  cidade: Cidade;

  @OneToMany(() => Curso, (curso) => curso.instituicao)
  cursos: Curso[];
}
