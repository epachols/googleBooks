const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: Array, required: true },
  description: String,
  image: String,
  link: String,
  pageCount: Number,
  subtitle: String,
  title: { type: String, required: true },
  // categories: Array
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
