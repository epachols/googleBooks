const router = require("express").Router();
const bookRoutes = require("./books");

// all the Book save etc routes will be through book.js

router.use("/books", bookRoutes);

module.exports = router;
