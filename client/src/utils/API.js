import axios from "axios";

export default {
  // Search books from Google API
  getUnsavedBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
  },
  // Gets the book with the given id
  getBooks: function(id) {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
