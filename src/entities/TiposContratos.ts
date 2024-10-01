import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contratos } from "./Contratos";

@Entity("tipos_contratos", { schema: "bdrrhh" })
export class TiposContratos {
  @PrimaryGeneratedColumn({ type: "int", name: "id_tipo_contrato" })
  idTipoContrato: number;

  @Column("varchar", { name: "descripcion_contrato", length: 30 })
  descripcionContrato: string;

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

  @OneToMany(() => Contratos, (contratos) => contratos.idTipoContrato2)
  contratos: Contratos[];
}
