import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleados } from "./Empleados";

@Entity("puestos", { schema: "bdrrhh" })
export class Puestos {
  @PrimaryGeneratedColumn({ type: "int", name: "id_puesto" })
  idPuesto: number;

  @Column("varchar", { name: "nombre_puesto", length: 30 })
  nombrePuesto: string;

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

  @OneToMany(() => Empleados, (empleados) => empleados.idPuesto2)
  empleados: Empleados[];
}
