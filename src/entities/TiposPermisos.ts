import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permisos } from "./Permisos";

@Entity("tipos_permisos", { schema: "bdrrhh" })
export class TiposPermisos {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id_tipo_permiso" })
  idTipoPermiso: number;

  @Column("varchar", { name: "nombre_permiso", length: 50 })
  nombrePermiso: string;

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

  @OneToMany(() => Permisos, (permisos) => permisos.idTipoPermiso2)
  permisos: Permisos[];
}
