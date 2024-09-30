"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCars = void 0;
// Simulación de una base de datos en memoria
let cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020 },
    { id: 2, brand: "Honda", model: "Civic", year: 2021 }
];
const getAllCars = (_req, res) => {
    res.json(cars);
};
exports.getAllCars = getAllCars;
