import CarroModel from "../Models/CarModel";
import { Request, Response } from "express";

class CarrosController {

    async create(req: Request, res: Response){
        try {
            const createdCar = await CarroModel.create(req.body);
            
            console.log(createdCar)
            return res.status(201).json(createdCar);
            
        } catch (error) {
            console.log(error)
            return res.status(400).send({message: "Invalid data"});
        }

    }

    async index(req: Request, res: Response){
        const cars = await CarroModel.find();

        return res.status(200).json(cars);
    }

    async show(req: Request, res: Response){
        try{
            const { id } = req.params;
            const car = await CarroModel.findById(id);
    
            if(!car){
                return res.status(403).send({message: "Car not found"});
            }
    
            return res.status(200).json(car);
        }catch(error) {
            console.log(error)
            return res.status(400).send({message: "Invalid id"});
        }

    }

    async update(req: Request, res: Response){
        try {
            const { id } = req.params;
            const car = req.body;
    
            const carDb = await CarroModel.findByIdAndUpdate(id, car);

            if(!carDb){
                return res.status(403).send({message: "Car not found"});
            }

            return res.status(200).json({message: "Successfully updated car"});
            
        } catch (error) {
            console.log(error)
            return res.status(400).send({message: "Invalid id"});
        }


    }

    async delete(req: Request, res: Response){
        try {
            const { id } = req.params;
            const car = await CarroModel.deleteOne({_id: id});
    
            if(!car){
                return res.status(403).send({message: "Car not found"});
            }
    
            return res.status(200).send({message: "Successfully deleted car"});
            
        } catch (error) {
            console.log(error)
            return res.status(400).send({message: "Invalid id"});
        }

    }

}

export default new CarrosController();