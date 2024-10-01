import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Paises } from "./Paises";
import { Estados } from "./Estados";
import { Municipios } from "./Municipios";
import { Ciudades } from "./Ciudades";
import { DomiciliosEmpleados } from "./DomiciliosEmpleados";
import { Sucursales } from "./Sucursales";

@Index("id_ciudad", ["idCiudad"], {})
@Index("id_estado", ["idEstado"], {})
@Index("id_municipio", ["idMunicipio"], {})
@Index("id_pais", ["idPais"], {})
@Entity("domicilios", { schema: "bdrrhh" })
export class Domicilios {
  @PrimaryGeneratedColumn({ type: "int", name: "id_domicilio" })
  idDomicilio: number;

  @Column("smallint", { name: "id_pais" })
  idPais: number;

  @Column("int", { name: "id_estado" })
  idEstado: number;

  @Column("int", { name: "id_municipio" })
  idMunicipio: number;

  @Column("int", { name: "id_ciudad" })
  idCiudad: number;

  @Column("varchar", { name: "colonia", length: 20 })
  colonia: string;

  @Column("char", { name: "cp", length: 5 })
  cp: string;

  @Column("char", { name: "numero", length: 5 })
  numero: string;

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

  @ManyToOne(() => Paises, (paises) => paises.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Paises;

  @ManyToOne(() => Estados, (estados) => estados.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estado", referencedColumnName: "idEstado" }])
  idEstado2: Estados;

  @ManyToOne(() => Municipios, (municipios) => municipios.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_municipio", referencedColumnName: "idMunicipio" }])
  idMunicipio2: Municipios;

  @ManyToOne(() => Ciudades, (ciudades) => ciudades.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_ciudad", referencedColumnName: "idCiudad" }])
  idCiudad2: Ciudades;

  @OneToMany(
    () => DomiciliosEmpleados,
    (domiciliosEmpleados) => domiciliosEmpleados.idDomicilio2
  )
  domiciliosEmpleados: DomiciliosEmpleados[];

  @OneToMany(() => Sucursales, (sucursales) => sucursales.idDomicilio2)
  sucursales: Sucursales[];
}
