import { Router } from "express";
import {craeteAdminUser, getAllUsers, getUserById, loginUser} from "../controller/Usuario.controller"


const router = Router();

// Ruta de prueba
router.get("/hola", (_req, res) => {
  res.send({ "hola": "hola" });
});

router.get("/", getAllUsers);             // Obtener todos
router.get("/:id", getUserById);          // Obtener por ID
router.post("/login", loginUser);         // login
router.post("/seed", craeteAdminUser);    // seed

export default router;