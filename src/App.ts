import express from "express";
import dotenv from "dotenv";
import autosRoutes from "./routes/AutoRoutes";
import usuariosRoutes from "./routes/UsuarioRoutes";
import { MyDataSource } from "./database/AppDataSource";


// Configurates and start database connection
MyDataSource
  .initialize()
  .then(() => {
    console.log("Data Srouce has been initialized!");
  })
  .catch((err) => {
    console.log("Error during data source initialization", err);
  });

// configures dotenv to work in your application
dotenv.config();
const app = express();
app.use(express.json()); // Para que acepte body por metodos POST

const PORT = process.env.PORT;

// RUTAS UTILIZADAS
app.use("/autos", autosRoutes);
app.use("/usuarios", usuariosRoutes)

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
