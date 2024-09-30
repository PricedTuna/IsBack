"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_controller_1 = require("../controller/car.controller");
const router = (0, express_1.Router)();
// Ruta de prueba
router.get("/hola", (_req, res) => {
    res.send({ "hola": "hola" });
});
// CRUD de coches
router.get("/", car_controller_1.getAllCars); // Obtener todos los coches
router.get("/:id", car_controller_1.getCarById); // Obtener un coche por ID
router.post("/", car_controller_1.createCar); // Crear un nuevo coche
router.put("/:id", car_controller_1.updateCar); // Actualizar un coche existente
router.delete("/:id", car_controller_1.deleteCar); // Eliminar un coche por ID
exports.default = router;
