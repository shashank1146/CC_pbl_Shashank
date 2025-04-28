const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  image: String
});

module.exports = mongoose.model('Book', bookSchema);
