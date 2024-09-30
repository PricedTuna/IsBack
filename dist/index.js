"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const car_routes_1 = __importDefault(require("./src/routes/car-routes"));
// configures dotenv to work in your application
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Para que acepte body por metodos POST
const PORT = process.env.PORT;
app.use('/cars', car_routes_1.default);
app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
