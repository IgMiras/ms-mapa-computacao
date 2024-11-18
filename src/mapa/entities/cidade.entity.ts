// cidade.entity.ts
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Curso } from "./curso.entity";

@Entity("cidade")
export class Cidade {
  @PrimaryColumn()
  cod: number;

  @Column()
  nome: string;

  @Column({ name: "id_estado" })
  idEstado: number;

  @Column("double")
  latitude: number;

  @Column("double")
  longitude: number;

  @Column()
  populacao: number;

  @OneToMany(() => Curso, (curso) => curso.cidade)
  cursos: Curso[];
}
