import mongoose from "mongoose";

const connectionString = "mongodb://feedback-db:27017/feedbacks"

export const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(connectionString, {});
    console.log("MongoDB connected successfully");
  } catch (error: any) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
