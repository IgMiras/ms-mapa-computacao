// curso-programa.entity.ts
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Curso } from "./curso.entity";

@Entity("curso_programa")
export class CursoPrograma {
  @PrimaryColumn()
  cod: string;

  @Column()
  nome: string;

  @Column({ name: "id_area_detalhada" })
  idAreaDetalhada: number;

  @Column()
  mapa: number;

  @OneToMany(() => Curso, (curso) => curso.programa)
  cursos: Curso[];
}
