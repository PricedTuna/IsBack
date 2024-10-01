import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleados } from "./Empleados";

@Entity("nacionalidades", { schema: "bdrrhh" })
export class Nacionalidades {
  @PrimaryGeneratedColumn({ type: "int", name: "id_nacionalidad" })
  idNacionalidad: number;

  @Column("varchar", { name: "nacionalidad", length: 50 })
  nacionalidad: string;

  @Column("timestamp", {
    name: "createdate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdate: Date | null;

  @Column("timestamp", {
    name: "updatedate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedate: Date | null;

  @OneToMany(() => Empleados, (empleados) => empleados.idNacionalidad2)
  empleados: Empleados[];
}
