import axios from "axios";

export default {
  // Gets all books
  getData: function(name) {
    return axios.post("/api/dash", name);
  },
  // Gets the book with the given id
  getLogin: function(info) {
    return axios.post("/api/login/", info);
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