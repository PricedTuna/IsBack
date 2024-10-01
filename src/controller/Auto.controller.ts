import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { CreateAutoDto } from "../dtos/car/CreateAutoDto";
import { validate } from "class-validator";
import { MyDataSource } from "../database/AppDataSource";
import { Autos } from "../entities/Autos";
import { UpdateAutoDto } from "../dtos/car/updateAutoDto";

const _carRepository = MyDataSource.getRepository(Autos);

// Obtener todos los coches
export const getAllCars = async (_req: Request, res: Response) => {
  try {
    const cars = await _carRepository.find();
    res.json(cars);
    return;
  } catch (error) {
    console.log("error getting cars", error);
    res.status(404).json({ message: "error getting cars" });
    return;
  }
};

// Obtener un coche por ID
export const getCarById = async (req: Request, res: Response) => {
  const carId = +req.params.id;

  try {
    const carFound = await _carRepository.findOneBy({ idAuto: carId });
    if (!carFound) {
      res.status(404).json({ message: "Car not found" });
      return;
    }
    res.json(carFound);
    return;
  } catch (error) {
    console.error("Error accessing the database: ", error);
    res.status(500).json({ message: "An unexpected error occurred" });
    return;
  }
};

// Crear un nuevo coche
export const createCar = async (req: Request, res: Response) => {
  const carData = plainToInstance(CreateAutoDto, req.body);
  const errors = await validate(carData);

  if (errors.length > 0) {
    res.status(400).json({ message: "Validation failed A", errors });
    return;
  }

  try {
    const carSaved = await _carRepository.create(carData);
    const results = await _carRepository.save(carSaved);

    res.status(201).json(results);
    return;
  } catch (error) {
    console.log("Error saving cars", error);
    res.status(404).json({ message: "Error saving cars" });
    return;
  }
};

// Actualizar un coche existente
export const updateCar = async (req: Request, res: Response) => {
  const idToSearch = +req.params.id;
  const carData = plainToInstance(UpdateAutoDto, req.body);

  try {
    const carFound = await _carRepository.findOneBy({ idAuto: idToSearch });
    _carRepository.merge(carFound, carData);
    const results = _carRepository.save(carFound);
    res.send(results);
    return;
  } catch (error) {
    console.log("Car not found ", error);
    res.status(404).json({ message: "Car not found" });
    return;
  }
};

// Eliminar un coche por ID
export const deleteCar = async (req: Request, res: Response) => {
  const idToDelete = +req.params.id;
  try {
    const results = await _carRepository.delete(idToDelete);
    res.send(results);
    return;
  } catch (error) {
    console.log("Error deleting car", idToDelete, error);
    res.status(500).json({ message: "Error deleting car" });
    return;
  }
};
