// curso.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Cidade } from "./cidade.entity";
import { Instituicao } from "./instituicao.entity";
import { CursoPrograma } from "./curso_programa.entity";

@Entity("curso")
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "id_registro_inep" })
  idRegistroInep: string;

  @Column({ name: "cod_municipio" })
  codMunicipio: number;

  @ManyToOne(() => Cidade, (cidade) => cidade.cursos)
  @JoinColumn({ name: "cod_municipio", referencedColumnName: "cod" })
  cidade: Cidade;

  @Column({ name: "id_instituicao" })
  idInstituicao: number;

  @ManyToOne(() => Instituicao, (instituicao) => instituicao.cursos)
  @JoinColumn({ name: "id_instituicao", referencedColumnName: "id" })
  instituicao: Instituicao;

  @Column({ name: "id_programa", nullable: true })
  idPrograma: string;

  @ManyToOne(() => CursoPrograma, (programa) => programa.cursos, {
    nullable: true,
    cascade: false,
  })
  @JoinColumn({ name: "id_programa", referencedColumnName: "cod" })
  programa: CursoPrograma;

  // Outros campos...
}
