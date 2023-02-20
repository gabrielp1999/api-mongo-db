import CarroModel from "../Models/CarModel";
import { Request, Response } from "express";

class CarrosController {
    async create(req : Request, res: Response){
        const createdCar = await CarroModel.create(req.body);
        
        console.log(createdCar)
        return res.status(201).json(createdCar);
    }

    async index(){

    }

    async show(){

    }

    async update(){

    }

    async delete(){

    }

}

export default new CarrosController();