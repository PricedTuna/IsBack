import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Empleados } from "./Empleados";

@Index("id_empleado", ["idEmpleado"], {})
@Entity("contactos_beneficiarios", { schema: "bdrrhh" })
export class ContactosBeneficiarios {
  @PrimaryGeneratedColumn({ type: "int", name: "id_contacto_beneficiario" })
  idContactoBeneficiario: number;

  @Column("varchar", { name: "nombre_contacto_beneficiario", length: 50 })
  nombreContactoBeneficiario: string;

  @Column("char", { name: "num_cel_contacto_beneficiario", length: 10 })
  numCelContactoBeneficiario: string;

  @Column("int", { name: "id_empleado" })
  idEmpleado: number;

  @Column("timestamp", {
    name: "create_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createDate: Date | null;

  @Column("timestamp", {
    name: "update_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateDate: Date | null;

  @ManyToOne(() => Empleados, (empleados) => empleados.contactosBeneficiarios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleados;
}
