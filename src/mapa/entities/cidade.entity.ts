import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Instituicao } from "./instituicao.entity";

@Entity("cidades")
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column("decimal", { precision: 10, scale: 6 })
  latitude: number;

  @Column("decimal", { precision: 10, scale: 6 })
  longitude: number;

  @OneToMany(() => Instituicao, (instituicao) => instituicao.cidade)
  instituicoes: Instituicao[];
}
