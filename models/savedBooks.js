const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedBooksSchema = new Schema ({
    title: { type: String, required: true },
    link: String,
    snippet: String,
    author: String,
    image: String,
    synopsis: String,
});

const SavedBooks = mongoose.model("savedBooks",savedBooksSchema);

module.exports = SavedBooks;