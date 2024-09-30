// routes.ts
import { Router } from "express";
import {getAllCars} from "../controller/car.controller"

const router = Router();

router.get("/hola", (_req, res) => {
  res.send({"hola": "hola"})
});

// Ruta para obtener todos los coches
router.get("/", getAllCars);

export default router;
