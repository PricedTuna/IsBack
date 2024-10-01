import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Empleados } from "./Empleados";
import { TiposContratos } from "./TiposContratos";
import { FrecuenciasPago } from "./FrecuenciasPago";

@Index("id_empleado", ["idEmpleado"], {})
@Index("id_frecuencia_pago", ["idFrecuenciaPago"], {})
@Index("id_tipo_contrato", ["idTipoContrato"], {})
@Entity("contratos", { schema: "bdrrhh" })
export class Contratos {
  @PrimaryGeneratedColumn({ type: "int", name: "id_contrato" })
  idContrato: number;

  @Column("int", { name: "id_empleado" })
  idEmpleado: number;

  @Column("date", { name: "fecha_inicio" })
  fechaInicio: string;

  @Column("date", { name: "fecha_fin", nullable: true })
  fechaFin: string | null;

  @Column("varchar", { name: "sueldo_base", length: 10 })
  sueldoBase: string;

  @Column("int", { name: "id_tipo_contrato" })
  idTipoContrato: number;

  @Column("char", { name: "horas_semanales", length: 2 })
  horasSemanales: string;

  @Column("tinyint", { name: "id_frecuencia_pago" })
  idFrecuenciaPago: number;

  @Column("time", { name: "hora_entrada" })
  horaEntrada: string;

  @Column("time", { name: "hora_salida" })
  horaSalida: string;

  @Column("char", { name: "asistencia_necesaria", length: 1 })
  asistenciaNecesaria: string;

  @Column("char", { name: "maneja_automovil_empresarial", length: 1 })
  manejaAutomovilEmpresarial: string;

  @Column("text", { name: "motivo_terminacion", nullable: true })
  motivoTerminacion: string | null;

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

  @ManyToOne(() => Empleados, (empleados) => empleados.contratos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleados;

  @ManyToOne(
    () => TiposContratos,
    (tiposContratos) => tiposContratos.contratos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_tipo_contrato", referencedColumnName: "idTipoContrato" },
  ])
  idTipoContrato2: TiposContratos;

  @ManyToOne(
    () => FrecuenciasPago,
    (frecuenciasPago) => frecuenciasPago.contratos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_frecuencia_pago", referencedColumnName: "idFrecuenciaPago" },
  ])
  idFrecuenciaPago2: FrecuenciasPago;
}
