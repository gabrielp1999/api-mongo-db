import { Router } from "express";
import carrosControler from "./Controllers/CarrosControler";

const routes = Router();

routes.get("/", (req, res) => res.send({message: "api ok"}));

routes.post("/carros", carrosControler.create);
routes.get("/carros", carrosControler.index);
routes.get("/carros/:id", carrosControler.show);
routes.delete("/carros/:id", carrosControler.delete);
routes.put("/carros/:id", carrosControler.update);


export { routes };