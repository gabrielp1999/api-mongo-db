import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  modelo: String,
  marca: String,
  ano: String,
  km: String,
  valor: String,
  portas: String,
  motor: String,
  descricao: String,
});

const CarModel = mongoose.model("carros", CarSchema);

export default CarModel ;
