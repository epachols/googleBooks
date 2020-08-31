const router = require("express").Router();
const booksController= require("../../controllers/booksController");

//TODO:put in route for obtaining books THROUGH google books api.
//TODO:put in route for obtaining books THROUGH google books api.
//TODO:put in route for obtaining books THROUGH google books api.

// /api/books route handler
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// matches /api/books/:id
router.route("/:id")
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove);

module.exports = router;