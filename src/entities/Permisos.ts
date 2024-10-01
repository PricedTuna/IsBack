import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TiposPermisos } from "./TiposPermisos";
import { Empleados } from "./Empleados";

@Index("id_empleado", ["idEmpleado"], {})
@Index("id_empleado_aprobacion", ["idEmpleadoAprobacion"], {})
@Index("id_tipo_permiso", ["idTipoPermiso"], {})
@Entity("permisos", { schema: "bdrrhh" })
export class Permisos {
  @PrimaryGeneratedColumn({ type: "int", name: "id_permiso" })
  idPermiso: number;

  @Column("tinyint", { name: "id_tipo_permiso" })
  idTipoPermiso: number;

  @Column("int", { name: "id_empleado" })
  idEmpleado: number;

  @Column("datetime", { name: "fecha_hora_inicio" })
  fechaHoraInicio: Date;

  @Column("datetime", { name: "fecha_hora_fin" })
  fechaHoraFin: Date;

  @Column("varchar", { name: "descripcion", nullable: true, length: 50 })
  descripcion: string | null;

  @Column("char", { name: "a_cuenta_de_vacaciones", length: 2 })
  aCuentaDeVacaciones: string;

  @Column("char", { name: "goce_de_sueldo", length: 2 })
  goceDeSueldo: string;

  @Column("char", { name: "aprobacion", length: 2 })
  aprobacion: string;

  @Column("int", { name: "id_empleado_aprobacion" })
  idEmpleadoAprobacion: number;

  @Column("char", { name: "estatus", length: 2 })
  estatus: string;

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

  @ManyToOne(() => TiposPermisos, (tiposPermisos) => tiposPermisos.permisos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_tipo_permiso", referencedColumnName: "idTipoPermiso" },
  ])
  idTipoPermiso2: TiposPermisos;

  @ManyToOne(() => Empleados, (empleados) => empleados.permisos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleados;

  @ManyToOne(() => Empleados, (empleados) => empleados.permisos2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_empleado_aprobacion", referencedColumnName: "idEmpleado" },
  ])
  idEmpleadoAprobacion2: Empleados;
}
