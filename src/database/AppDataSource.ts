import { DataSource } from "typeorm";

export const MyDataSource = new DataSource({
  type: "mysql",
  host: "localhost",       // Conéctate a localhost porque estás en la máquina host
  port: 3307,              // El puerto expuesto en Docker es el 3307
  username: "root",        // Usuario root, definido por MYSQL_ROOT_PASSWORD
  password: "root",        // Contraseña que configuraste en MYSQL_ROOT_PASSWORD
  database: "isback",      // La base de datos que configuraste en el Docker-compose
  entities: ["src/entities/*.ts"],  // Cambia esto a tus entidades
  logging: true,
  synchronize: true,       // Sincroniza automáticamente las tablas
});
