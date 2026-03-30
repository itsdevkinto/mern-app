import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB reconnected");
});

const connectDB = async (retries = 0) => {
  try {
    await mongoose.connect(uri);
    console.log(`\x1b[36m`, "Connected to MongoDB");
    return { success: true };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);

    if (retries >= 5) {
      console.error("Max retries reached. Exiting...");
      process.exit(1);
    }
    // Wait 5 seconds using promise-based delay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // Recursively call and await the result
    return await connectDB(retries + 1);
  }
};

export default connectDB;