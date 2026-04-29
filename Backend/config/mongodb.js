import mongoose from "mongoose";

const connectDb = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in the backend .env file.");
  }

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  });

  await mongoose.connect(`${mongoUri}/e-commerce`);
};

export default connectDb;