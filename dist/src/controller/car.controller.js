"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.createCar = exports.getCarById = exports.getAllCars = void 0;
// Simulación de una base de datos en memoria
let cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020 },
    { id: 2, brand: "Honda", model: "Civic", year: 2021 }
];
// Obtener todos los coches
const getAllCars = (_req, res) => {
    res.json(cars);
};
exports.getAllCars = getAllCars;
// Obtener un coche por ID
const getCarById = (req, res) => {
    const carId = parseInt(req.params.id);
    const car = cars.find((c) => c.id === carId);
    if (!car) {
        res.status(404).json({ message: "Car not found" });
    }
    res.json(car);
};
exports.getCarById = getCarById;
// Crear un nuevo coche
const createCar = (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    const newCar = {
        id: cars.length + 1, // Simular autoincremento
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
    };
    cars.push(newCar);
    res.status(201).json(newCar);
};
exports.createCar = createCar;
// Actualizar un coche existente
const updateCar = (req, res) => {
    const carId = parseInt(req.params.id);
    const carIndex = cars.findIndex((c) => c.id === carId);
    if (carIndex === -1) {
        res.status(404).json({ message: "Car not found" });
    }
    const updatedCar = Object.assign(Object.assign({}, cars[carIndex]), req.body);
    cars[carIndex] = updatedCar;
    res.json(updatedCar);
};
exports.updateCar = updateCar;
// Eliminar un coche por ID
const deleteCar = (req, res) => {
    const carId = parseInt(req.params.id);
    const carIndex = cars.findIndex((c) => c.id === carId);
    if (carIndex === -1) {
        res.status(404).json({ message: "Car not found" });
    }
    cars.splice(carIndex, 1);
    res.status(204).send();
};
exports.deleteCar = deleteCar;
