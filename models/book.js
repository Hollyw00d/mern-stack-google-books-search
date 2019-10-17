const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  previewLink: { type: String, required: true },
  publishedDate: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
