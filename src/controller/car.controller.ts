import { Request, Response } from "express";
import { ICar } from "../interfaces/ICar";

// Simulación de una base de datos en memoria
let cars: ICar[] = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2020 },
  { id: 2, brand: "Honda", model: "Civic", year: 2021 }
];

// Obtener todos los coches
export const getAllCars = (_req: Request, res: Response) => {
  res.json(cars);
};

// Obtener un coche por ID
export const getCarById = (req: Request, res: Response) => {
  const carId = parseInt(req.params.id);
  const car = cars.find((c) => c.id === carId);
  
  if (!car) {
    res.status(404).json({ message: "Car not found" });
  }

  res.json(car);
};

// Crear un nuevo coche
export const createCar = (req: Request, res: Response) => {
  const newCar: ICar = {
    id: cars.length + 1, // Simular autoincremento
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
  };

  cars.push(newCar);
  res.status(201).json(newCar);
};

// Actualizar un coche existente
export const updateCar = (req: Request, res: Response) => {
  const carId = parseInt(req.params.id);
  const carIndex = cars.findIndex((c) => c.id === carId);

  if (carIndex === -1) {
    res.status(404).json({ message: "Car not found" });
  }

  const updatedCar = { ...cars[carIndex], ...req.body };
  cars[carIndex] = updatedCar;

  res.json(updatedCar);
};

// Eliminar un coche por ID
export const deleteCar = (req: Request, res: Response) => {
  const carId = parseInt(req.params.id);
  const carIndex = cars.findIndex((c) => c.id === carId);

  if (carIndex === -1) {
    res.status(404).json({ message: "Car not found" });
  }

  cars.splice(carIndex, 1);
  res.status(204).send();
};
