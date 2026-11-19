import mongoose from "mongoose";

// Function to connect to MongoDB using Mongoose
const connectDB = async () => {
    try {
        // Use the MONGO_URI from environment variables to connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        // Log the error and exit the process if the connection fails
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;