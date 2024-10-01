import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Empleados } from "./Empleados";
import { TiposAsistencias } from "./TiposAsistencias";

@Index("id_empleado", ["idEmpleado"], {})
@Index("id_tipo_asistencia", ["idTipoAsistencia"], {})
@Entity("asistencias", { schema: "bdrrhh" })
export class Asistencias {
  @PrimaryGeneratedColumn({ type: "int", name: "id_asistencia" })
  idAsistencia: number;

  @Column("int", { name: "id_empleado" })
  idEmpleado: number;

  @Column("tinyint", { name: "id_tipo_asistencia" })
  idTipoAsistencia: number;

  @Column("timestamp", {
    name: "asistencia_inicio",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  asistenciaInicio: Date | null;

  @Column("timestamp", {
    name: "asistencia_fin",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  asistenciaFin: Date | null;

  @Column("tinyint", { name: "horas_trabajadas" })
  horasTrabajadas: number;

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

  @ManyToOne(() => Empleados, (empleados) => empleados.asistencias, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleados;

  @ManyToOne(
    () => TiposAsistencias,
    (tiposAsistencias) => tiposAsistencias.asistencias,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_tipo_asistencia", referencedColumnName: "idTipoAsistencia" },
  ])
  idTipoAsistencia2: TiposAsistencias;
}
