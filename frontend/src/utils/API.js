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
  updateLogin: function(id) {
    return axios.put("/api/update/", id);
  }
};