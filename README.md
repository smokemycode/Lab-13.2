# Digital Bookshelf API (Mongoose Models & Schemas)

A REST API for a library to add, list, look up, edit, and remove books.
Built with Node.js, Express, Mongoose, and MongoDB Atlas (ES modules).

## Setup
1. `npm install`
2. Create a `.env` file with `MONGO_URI=...` and `PORT=3000`
3. `node server.js`

## Endpoints (base: /api/books)
| Method | Path | What it does |
|---|---|---|
| POST | / | Create a book (201) |
| GET | / | Get all books |
| GET | /:id | Get one book (404 if not found) |
| PUT | /:id | Update a book |
| DELETE | /:id | Delete a book (returns a message) |

## Reflection
1. Why is it beneficial to separate your routes, models, and database connection into different directories?
   - Each file has one job. `connection.js` just connects to Atlas, `Book.js` just describes what a book looks like, and `bookRoutes.js` just handles requests. When something broke, I knew exactly which file to look in, like when my import path was wrong in `bookRoutes.js`. It also means if I add another model later (like Users), I can just add new files instead of making `server.js` huge.

2. What is the difference between `PUT` and `PATCH` HTTP methods, and which one does your `PUT /:id` endpoint more closely resemble?
   - `PUT` is supposed to replace the whole book, and `PATCH` only changes the fields you send. My `PUT` route actually acts more like `PATCH`. When I sent just `{ "inStock": false }`, the title and author stayed the same. That's because `findByIdAndUpdate` only updates the fields in `req.body`.

3. In the `DELETE` route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?
   - I think a success message is best. My route sends back "Book deleted successfully" so whoever is using the API knows it worked. If it sent nothing back, you wouldn't know if it actually deleted. And if the book isn't there, it sends a 404 so you know that too.
