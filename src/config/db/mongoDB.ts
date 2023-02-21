import mongoose from "mongoose";

const { USER_DB, PASSWORD_DB } = process.env; 

const startDb = async () => {
    await mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD_DB}@cluster0.7cetczf.mongodb.net/test`)
    .then(() => console.log("connected to mongoDB"))
    .catch((err) => console.log("error connecting with mongo", err))
};

export { startDb };