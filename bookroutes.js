const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Add a book
router.post('/', async (req, res) => {
  const { title, author, description, image } = req.body;
  const newBook = new Book({ title, author, description, image });
  await newBook.save();
  res.json(newBook);
});

// Delete a book
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});

module.exports = router;
