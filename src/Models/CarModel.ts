import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const CarroSchema = new Schema({
  id: ObjectId,
  modelo: String,
  marca: String,
  ano: String,
  km: String,
  valor: String,
  portas: String,
  motor: String,
  descricao: String, 
  date: Date
});

const CarroModel = mongoose.model("carros", CarroSchema);

export { CarroModel };