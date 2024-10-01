import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Empleados } from "./Empleados";
import { Domicilios } from "./Domicilios";

@Index("id_empleado", ["idEmpleado"], {})
@Entity("domicilios_empleados", { schema: "bdrrhh" })
export class DomiciliosEmpleados {
  @Column("int", { primary: true, name: "id_domicilio" })
  idDomicilio: number;

  @Column("int", { primary: true, name: "id_empleado" })
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

  @ManyToOne(() => Empleados, (empleados) => empleados.domiciliosEmpleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleados;

  @ManyToOne(() => Domicilios, (domicilios) => domicilios.domiciliosEmpleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_domicilio", referencedColumnName: "idDomicilio" }])
  idDomicilio2: Domicilios;
}
