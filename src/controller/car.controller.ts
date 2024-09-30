import { Request, Response } from "express";
import { ICar } from "../interfaces/ICar";
import { plainToInstance } from "class-transformer";
import { CreateCarDto } from "../dtos/car/CreateCarDto";
import { validate } from "class-validator";

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
export const createCar = async (req: Request, res: Response) => {

  const carData = plainToInstance(CreateCarDto, req.body);
  const errors = await validate(carData);

  if (errors.length > 0) {
    return res.status(400).json({ message: "Validation failed", errors });
  }


  const newCar = { id: Date.now(), ...carData }; // Simula un ID único
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
