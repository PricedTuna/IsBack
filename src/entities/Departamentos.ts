import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleados } from "./Empleados";

@Entity("departamentos", { schema: "bdrrhh" })
export class Departamentos {
  @PrimaryGeneratedColumn({ type: "int", name: "id_departamento" })
  idDepartamento: number;

  @Column("varchar", { name: "nombre_departamento", length: 30 })
  nombreDepartamento: string;

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

  @OneToMany(() => Empleados, (empleados) => empleados.idDepartamento2)
  empleados: Empleados[];
}
