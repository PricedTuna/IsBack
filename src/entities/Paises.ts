import { Column, Entity, OneToMany } from "typeorm";
import { Ciudades } from "./Ciudades";
import { Domicilios } from "./Domicilios";
import { Estados } from "./Estados";
import { Municipios } from "./Municipios";

@Entity("paises", { schema: "bdrrhh" })
export class Paises {
  @Column("smallint", { primary: true, name: "id_pais" })
  idPais: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

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

  @OneToMany(() => Ciudades, (ciudades) => ciudades.idPais2)
  ciudades: Ciudades[];

  @OneToMany(() => Domicilios, (domicilios) => domicilios.idPais2)
  domicilios: Domicilios[];

  @OneToMany(() => Estados, (estados) => estados.idPais2)
  estados: Estados[];

  @OneToMany(() => Municipios, (municipios) => municipios.idPais2)
  municipios: Municipios[];
}
