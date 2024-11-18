// avaliacao-enade.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("avaliacao_enade")
export class AvaliacaoEnade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "cod_municipio" })
  codMunicipio: number;

  @Column({ name: "conceito_enade_continuo" })
  conceitoEnadeContinuo: number;

  // Outros campos...

  // Se necessário, defina relacionamentos
}
