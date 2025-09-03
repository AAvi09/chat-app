import mongoose from "mongoose";

export const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {}
};
