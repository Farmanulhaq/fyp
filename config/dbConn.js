import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/vehicify_proj"

const connectMongoDB = async () => {
    await mongoose.connect(MONGO_URI, {
    });
    console.log("MongoDB Connected!");
}
export default connectMongoDB;