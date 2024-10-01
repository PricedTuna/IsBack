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
import { Municipios } from "./Municipios";

@Index("id_pais", ["idPais"], {})
@Entity("estados", { schema: "bdrrhh" })
export class Estados {
  @Column("int", { primary: true, name: "id_estado" })
  idEstado: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("smallint", { name: "id_pais" })
  idPais: number;

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

  @OneToMany(() => Ciudades, (ciudades) => ciudades.idEstado2)
  ciudades: Ciudades[];

  @OneToMany(() => Domicilios, (domicilios) => domicilios.idEstado2)
  domicilios: Domicilios[];

  @ManyToOne(() => Paises, (paises) => paises.estados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Paises;

  @OneToMany(() => Municipios, (municipios) => municipios.idEstado2)
  municipios: Municipios[];
}
