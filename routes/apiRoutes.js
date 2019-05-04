const router = require("express").Router();
const mongoose = require("mongoose");

router.get("/books", (req,res) => {
    // Should return all saved books as JSON.
})

router.post("/books", (req,res) => {
    // Will be used to save a new book to the database.
})

router.post("/books/:id", (req,res) => {
    // Will be used to delete a book from the database by Mongo `_id`.
})

module.exports = router;