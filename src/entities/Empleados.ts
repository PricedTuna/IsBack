import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asistencias } from "./Asistencias";
import { AutosEmpleados } from "./AutosEmpleados";
import { ContactosBeneficiarios } from "./ContactosBeneficiarios";
import { ContactosEmergencias } from "./ContactosEmergencias";
import { Contratos } from "./Contratos";
import { DomiciliosEmpleados } from "./DomiciliosEmpleados";
import { Contactos } from "./Contactos";
import { Nacionalidades } from "./Nacionalidades";
import { EstadosCiviles } from "./EstadosCiviles";
import { Sucursales } from "./Sucursales";
import { Departamentos } from "./Departamentos";
import { Puestos } from "./Puestos";
import { TiposEmpleados } from "./TiposEmpleados";
import { DiasVacaciones } from "./DiasVacaciones";
import { LicenciasManejo } from "./LicenciasManejo";
import { Permisos } from "./Permisos";
import { Usuarios } from "./Usuarios";

@Index("curp", ["curp"], { unique: true })
@Index("id_contacto", ["idContacto"], {})
@Index("id_departamento", ["idDepartamento"], {})
@Index("id_dias_vacaciones", ["idDiasVacaciones"], {})
@Index("id_estado_civil", ["idEstadoCivil"], {})
@Index("id_nacionalidad", ["idNacionalidad"], {})
@Index("id_puesto", ["idPuesto"], {})
@Index("id_sucursal", ["idSucursal"], {})
@Index("id_tipo_empleado", ["idTipoEmpleado"], {})
@Index("nss", ["nss"], { unique: true })
@Index("rfc", ["rfc"], { unique: true })
@Entity("empleados", { schema: "bdrrhh" })
export class Empleados {
  @PrimaryGeneratedColumn({ type: "int", name: "id_empleado" })
  idEmpleado: number;

  @Column("varchar", { name: "nombre_empleado", length: 50 })
  nombreEmpleado: string;

  @Column("int", { name: "id_contacto" })
  idContacto: number;

  @Column("char", { name: "curp", unique: true, length: 18 })
  curp: string;

  @Column("char", { name: "rfc", unique: true, length: 13 })
  rfc: string;

  @Column("char", { name: "nss", unique: true, length: 11 })
  nss: string;

  @Column("char", { name: "registro_patronal", length: 11 })
  registroPatronal: string;

  @Column("date", { name: "fecha_nacimiento" })
  fechaNacimiento: string;

  @Column("varchar", { name: "lugar_nacimiento", length: 50 })
  lugarNacimiento: string;

  @Column("int", { name: "id_nacionalidad" })
  idNacionalidad: number;

  @Column("tinyint", { name: "id_estado_civil" })
  idEstadoCivil: number;

  @Column("int", { name: "id_sucursal" })
  idSucursal: number;

  @Column("int", { name: "id_departamento" })
  idDepartamento: number;

  @Column("int", { name: "id_puesto" })
  idPuesto: number;

  @Column("tinyint", { name: "id_tipo_empleado" })
  idTipoEmpleado: number;

  @Column("tinyint", { name: "id_dias_vacaciones" })
  idDiasVacaciones: number;

  @Column("tinyint", { name: "vacaciones_restantes" })
  vacacionesRestantes: number;

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

  @OneToMany(() => Asistencias, (asistencias) => asistencias.idEmpleado2)
  asistencias: Asistencias[];

  @OneToMany(
    () => AutosEmpleados,
    (autosEmpleados) => autosEmpleados.idEmpleadoResponsable2
  )
  autosEmpleados: AutosEmpleados[];

  @OneToMany(
    () => ContactosBeneficiarios,
    (contactosBeneficiarios) => contactosBeneficiarios.idEmpleado2
  )
  contactosBeneficiarios: ContactosBeneficiarios[];

  @OneToMany(
    () => ContactosEmergencias,
    (contactosEmergencias) => contactosEmergencias.idEmpleado2
  )
  contactosEmergencias: ContactosEmergencias[];

  @OneToMany(() => Contratos, (contratos) => contratos.idEmpleado2)
  contratos: Contratos[];

  @OneToMany(
    () => DomiciliosEmpleados,
    (domiciliosEmpleados) => domiciliosEmpleados.idEmpleado2
  )
  domiciliosEmpleados: DomiciliosEmpleados[];

  @ManyToOne(() => Contactos, (contactos) => contactos.empleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_contacto", referencedColumnName: "idContacto" }])
  idContacto2: Contactos;

  @ManyToOne(
    () => Nacionalidades,
    (nacionalidades) => nacionalidades.empleados,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_nacionalidad", referencedColumnName: "idNacionalidad" },
  ])
  idNacionalidad2: Nacionalidades;

  @ManyToOne(
    () => EstadosCiviles,
    (estadosCiviles) => estadosCiviles.empleados,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_estado_civil", referencedColumnName: "idEstadoCivil" },
  ])
  idEstadoCivil2: EstadosCiviles;

  @ManyToOne(() => Sucursales, (sucursales) => sucursales.empleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_sucursal", referencedColumnName: "idSucursal" }])
  idSucursal2: Sucursales;

  @ManyToOne(() => Departamentos, (departamentos) => departamentos.empleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_departamento", referencedColumnName: "idDepartamento" },
  ])
  idDepartamento2: Departamentos;

  @ManyToOne(() => Puestos, (puestos) => puestos.empleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_puesto", referencedColumnName: "idPuesto" }])
  idPuesto2: Puestos;

  @ManyToOne(
    () => TiposEmpleados,
    (tiposEmpleados) => tiposEmpleados.empleados,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_tipo_empleado", referencedColumnName: "idTipoEmpleado" },
  ])
  idTipoEmpleado2: TiposEmpleados;

  @ManyToOne(
    () => DiasVacaciones,
    (diasVacaciones) => diasVacaciones.empleados,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_dias_vacaciones", referencedColumnName: "idDiasVacaciones" },
  ])
  idDiasVacaciones2: DiasVacaciones;

  @OneToMany(
    () => LicenciasManejo,
    (licenciasManejo) => licenciasManejo.idEmpleado2
  )
  licenciasManejos: LicenciasManejo[];

  @OneToMany(() => Permisos, (permisos) => permisos.idEmpleado2)
  permisos: Permisos[];

  @OneToMany(() => Permisos, (permisos) => permisos.idEmpleadoAprobacion2)
  permisos2: Permisos[];

  @OneToMany(() => Usuarios, (usuarios) => usuarios.idEmpleado2)
  usuarios: Usuarios[];
}
