import { Router } from "express";
import carrosControler from "./Controllers/carrosControler";

const routes = Router();

routes.get("/", (req, res) => res.send({message: "api ok"}));

routes.post("/carros", carrosControler.create);


export { routes };