import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBqkgPt4TqsMvUeGUkGErikLgxKBlQ2f4Y";
//FROM: examples:
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBqkgPt4TqsMvUeGUkGErikLgxKBlQ2f4Y
// https://www.googleapis.com/books/v1/volumes?q=harry_potter&key=AIzaSyBqkgPt4TqsMvUeGUkGErikLgxKBlQ2f4Y


export default {
  //String search from search page
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
