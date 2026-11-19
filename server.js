import express from "express";
import 'dotenv/config.js';
import connectDB from "./db/connection.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
connectDB();

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Use the book routes for any requests to /api/books
app.use("/api/books", bookRoutes);

// Define a simple route to check if the API is running
app.get("/", (req, res) => 
    res.send("Digital Bookshelf API is running!")
);

// Start the server and listen on the specified port
app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`),
);
