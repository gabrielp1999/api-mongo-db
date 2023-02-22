import { Router } from "express";
import CarController from "./Controllers/CarControler";

const routes = Router();

routes.get("/", (req, res) => res.send({message: "api ok"}));

routes.post("/carros", CarController.create);
routes.get("/carros", CarController.index);
routes.get("/carros/:id", CarController.show);
routes.delete("/carros/:id", CarController.delete);
routes.put("/carros/:id", CarController.update);


export { routes };