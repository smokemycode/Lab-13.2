import express from 'express';
import Book from '../models/book.js';

// Create a new router instance
const router = express.Router();

// Define a route to get all books from the database
router.get('/', async (req, res) => {
    try {
        // Fetch all books from the database
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        // Handle any errors that occur during the database query
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        // Create a new book in the database using the request body
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
