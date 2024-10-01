import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleados } from "./Empleados";

@Entity("contactos", { schema: "bdrrhh" })
export class Contactos {
  @PrimaryGeneratedColumn({ type: "int", name: "id_contacto" })
  idContacto: number;

  @Column("varchar", { name: "email_laboral", nullable: true, length: 100 })
  emailLaboral: string | null;

  @Column("varchar", { name: "email_personal", nullable: true, length: 100 })
  emailPersonal: string | null;

  @Column("char", { name: "num_cel_laboral", nullable: true, length: 10 })
  numCelLaboral: string | null;

  @Column("char", { name: "num_cel_personal", length: 10 })
  numCelPersonal: string;

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

  @OneToMany(() => Empleados, (empleados) => empleados.idContacto2)
  empleados: Empleados[];
}
