import { Router } from "express";
import { 
  getAllCars, 
  getCarById, 
  createCar,
  deleteCar,
  updateCar
} from "../controller/Auto.controller";

const router = Router();

// Ruta de prueba
router.get("/hola", (_req, res) => {
  res.send({ "hola": "hola" });
});

// CRUD de coches
router.get("/", getAllCars);      // Obtener todos los coches
router.get("/:id", getCarById);   // Obtener un coche por ID
router.post("/", createCar);      // Crear un nuevo coche
router.put("/:id", updateCar);       // Actualizar un nuevo coche
router.delete("/:id", deleteCar);    // Eliminar un nuevo coche

export default router;
