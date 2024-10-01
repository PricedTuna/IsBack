import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Paises } from "./Paises";
import { Estados } from "./Estados";
import { Municipios } from "./Municipios";
import { Domicilios } from "./Domicilios";

@Index("id_estado", ["idEstado"], {})
@Index("id_municipio", ["idMunicipio"], {})
@Index("id_pais", ["idPais"], {})
@Entity("ciudades", { schema: "bdrrhh" })
export class Ciudades {
  @Column("int", { primary: true, name: "id_ciudad" })
  idCiudad: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("smallint", { name: "id_pais" })
  idPais: number;

  @Column("int", { name: "id_estado" })
  idEstado: number;

  @Column("int", { name: "id_municipio" })
  idMunicipio: number;

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

  @ManyToOne(() => Paises, (paises) => paises.ciudades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Paises;

  @ManyToOne(() => Estados, (estados) => estados.ciudades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estado", referencedColumnName: "idEstado" }])
  idEstado2: Estados;

  @ManyToOne(() => Municipios, (municipios) => municipios.ciudades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_municipio", referencedColumnName: "idMunicipio" }])
  idMunicipio2: Municipios;

  @OneToMany(() => Domicilios, (domicilios) => domicilios.idCiudad2)
  domicilios: Domicilios[];
}
