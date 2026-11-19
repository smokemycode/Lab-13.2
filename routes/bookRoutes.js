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

export default router;
