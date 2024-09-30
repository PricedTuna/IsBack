import { Request, Response } from "express";
import { ICar } from "../interfaces/ICar";


// Simulación de una base de datos en memoria
let cars: ICar[] = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2020 },
  { id: 2, brand: "Honda", model: "Civic", year: 2021 }
];


export const getAllCars = (_req: Request, res: Response) => {
  res.json(cars);
};

