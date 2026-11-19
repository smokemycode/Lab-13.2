import express from "express";
import 'dotenv/config.js';
import connectDB from "./db/connection.js";

const app = express();
connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => 
    res.send("Digital Bookshelf API is running!")
);

app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`),
);
