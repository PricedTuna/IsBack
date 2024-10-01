import { Request, Response } from "express";
import { MyDataSource } from "../database/AppDataSource";
import { Usuarios } from "../entities/Usuarios";
import { LoginUserDto } from "../dtos/usuario/LoginUserDto.dto";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

const _usuarioRepository = MyDataSource.getRepository(Usuarios);

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await _usuarioRepository.find();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = +req.params.id;

  try {
    const userFound = await _usuarioRepository.findOneBy({ idUsuario: id });

    if (!userFound) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(userFound);
    return;
  } catch (error) {
    console.error("Error getting user from database ", error);
    res.status(500).json({ message: "An unexpected error occurred" });
    return;
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const loginUserData = plainToInstance(LoginUserDto, req.body);
  const errors = await validate(loginUserData);

  if (errors.length > 0) {
    res.status(400).json({ message: "Validation failed A", errors });
    return;
  }

  try {
    const userFound = await _usuarioRepository.findOneBy({
      correo: loginUserData.email,
      password: loginUserData.password,
    });
    console.log(JSON.stringify(userFound, null, 2));
    res.json(userFound);
    return;
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }

  res.status(404).json({ message: "User not found" });
};

export const craeteAdminUser = async (_req: Request, res: Response) => {
  const newUser = {
    nombreUsuario: "admin",
    correo: "admin@admin.com",
    password: "admin",
  };

  const userSaved = await _usuarioRepository.create(newUser);
  const results = await _usuarioRepository.save(userSaved);

  res.status(201).json(results);
};

// Crear un nuevo coche
// export const createCar = async (req: Request, res: Response) => {

//   const carData = plainToInstance(CreateCarDto, req.body);
//   const errors = await validate(carData);

//   if (errors.length > 0) {
//     res.status(400).json({ message: "Validation failed A", errors });
//     return;
//   }

//   const carSaved = await _usuarioRepository.create(carData);
//   const results = await _usuarioRepository.save(carSaved);

//   console.log(JSON.stringify(carSaved, null, 2)); // !

//   res.status(201).json(results);
// };

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
