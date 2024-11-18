// instituicao.entity.ts
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Curso } from "./curso.entity";

@Entity("instituicao")
export class Instituicao {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sigla: string;

  @OneToMany(() => Curso, (curso) => curso.instituicao)
  cursos: Curso[];
}
