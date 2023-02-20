import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const CarroSchema = new Schema({
  modelo: String,
  marca: String,
  ano: String,
  km: String,
  valor: String,
  portas: String,
  motor: String,
  descricao: String,
});

const CarroModel = mongoose.model("carros", CarroSchema);

export default CarroModel ;