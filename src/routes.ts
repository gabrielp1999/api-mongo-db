import { Router } from "express";

const routes = Router();

routes.get("/cars", (req, res) => res.send({message: "rota de carro"}));


export { routes };