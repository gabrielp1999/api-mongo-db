import mongoose from "mongoose";

const { USER_DB, PASSWORD_DB } = process.env; 

const startDb = async () => {
    await mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD_DB}@cluster0.6u45dtr.mongodb.net/test`)
    .then(() => console.log("conected in mongoDB"))
    .catch((err) => console.log("erro", err))
};

export { startDb };