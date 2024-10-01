import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { CreateCarDto } from "../dtos/car/CreateCarDto";
import { validate } from "class-validator";
import { MyDataSource } from "../database/AppDataSource";
import { Car } from "../entities/Car.entity";

const _carRepository = MyDataSource.getRepository(Car);

// Obtener todos los coches
export const getAllCars = async (_req: Request, res: Response) => {
  const cars = await _carRepository.find();
  res.json(cars);
};

// Obtener un coche por ID
export const getCarById = async (req: Request, res: Response) => {
  const carId = req.params.id;
  const carFound = await _carRepository.findOneBy({id: carId});
  
  if (!carFound) {
    res.status(404).json({ message: "Car not found" });
  }

  res.json(carFound);
};

// Crear un nuevo coche
export const createCar = async (req: Request, res: Response) => {

  const carData = plainToInstance(CreateCarDto, req.body);
  const errors = await validate(carData);

  if (errors.length > 0) {
    res.status(400).json({ message: "Validation failed A", errors });
    return;
  }
  

  const carSaved = await _carRepository.create(carData);
  const results = await _carRepository.save(carSaved);

  console.log(JSON.stringify(carSaved, null, 2)); // !

  res.status(201).json(results);
};

// Actualizar un coche existente
/*

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

*/
