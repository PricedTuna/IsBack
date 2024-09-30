import express, {} from "express";
import dotenv from "dotenv";
import autos_routes from "./src/routes/car-routes"

// configures dotenv to work in your application
dotenv.config();
const app = express();
app.use(express.json()); // Para que acepte body por metodos POST

const PORT = process.env.PORT;

app.use('/cars', autos_routes);

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});