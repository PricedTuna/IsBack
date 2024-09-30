"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = require("express");
const car_controller_1 = require("../controller/car.controller");
const router = (0, express_1.Router)();
router.get("/hola", (_req, res) => {
    res.send({ "hola": "hola" });
});
// Ruta para obtener todos los coches
router.get("/", car_controller_1.getAllCars);
exports.default = router;
