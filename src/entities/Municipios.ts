import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Ciudades } from "./Ciudades";
import { Domicilios } from "./Domicilios";
import { Paises } from "./Paises";
import { Estados } from "./Estados";

@Index("id_estado", ["idEstado"], {})
@Index("id_pais", ["idPais"], {})
@Entity("municipios", { schema: "bdrrhh" })
export class Municipios {
  @Column("int", { primary: true, name: "id_municipio" })
  idMunicipio: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("smallint", { name: "id_pais" })
  idPais: number;

  @Column("int", { name: "id_estado" })
  idEstado: number;

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

  @OneToMany(() => Ciudades, (ciudades) => ciudades.idMunicipio2)
  ciudades: Ciudades[];

  @OneToMany(() => Domicilios, (domicilios) => domicilios.idMunicipio2)
  domicilios: Domicilios[];

  @ManyToOne(() => Paises, (paises) => paises.municipios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Paises;

  @ManyToOne(() => Estados, (estados) => estados.municipios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estado", referencedColumnName: "idEstado" }])
  idEstado2: Estados;
}
