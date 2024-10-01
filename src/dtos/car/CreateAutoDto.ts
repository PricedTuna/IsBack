import { IsString, MaxLength } from "class-validator";

export class CreateAutoDto {

  @IsString()
  @MaxLength(30)
  nombreModelo: string

  @IsString()
  @MaxLength(1)
  yearModelo: string;

  @IsString()
  @MaxLength(30)
  ordenRegistro: string;

  @IsString()
  fechaCompra: string;

  @IsString()
  @MaxLength(10)
  numeroPlacas: string;

  @IsString()
  @MaxLength(17)
  numeroSerie: string;

  @IsString()
  @MaxLength(20)
  numeroPoliza: string;

  @IsString()
  vencimientoPoliza: string;

  @IsString()
  @MaxLength(1)
  estatus: string;

}