import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  year: string;
}