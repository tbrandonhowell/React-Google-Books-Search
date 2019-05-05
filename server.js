// =================================
// REQUIRE
const express = require("express");
const mongoose = require("mongoose");
// =================================

// =================================
// SERVER
const PORT = process.argv[2] || process.env.PORT || 3001;
const app = express(); // initialize express
app.use(express.static('public')); // establish public folder
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// =================================

// =================================
// DATABASE
const db = require("./models");
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/books"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// =================================


// * `/api/books` (get) - Should return all saved books as JSON.

// * `/api/books` (post) - Will be used to save a new book to the database.

// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.


// =================================
// GET "/api/books" ROUTE
app.get("/api/books", (req,res) => {
    console.log("\n\n/api/books GET Route requested.");
    db.SavedBooks.find({}) // find all saved books
        .then(response => {
            console.log("Response received from DB");
            res.header("Access-Control-Allow-Origin", "*"); // this gets rid of the CORS issue
            res.json(response);
        })
});
// =================================

// =================================
// POST "/api/books" ROUTE
app.post("/api/books", (req,res) => {
    console.log("\n\n/api/books POST Route requested.");
    db.SavedBooks.create(req.body)
        .then(inserted => {
            console.log("Response received from DB");
            console.log(inserted);
            res.header("Access-Control-Allow-Origin", "*"); // this gets rid of the CORS issue
            res.json(inserted);
        })
});
// =================================

// =================================
// POST "/api/books/delete" ROUTE - delete a book
app.post("/api/books/delete", (req,res) => {
    console.log("\n\n/api/books/delete POST route requested");
    db.SavedBooks.deleteOne({_id: req.body.id})
        .then(deleted => {
            console.log("Response received from DB");
            console.log(deleted);
            res.header("Access-Control-Allow-Origin", "*"); // this gets rid of the CORS issue
            res.json(deleted);
        })
});
// =================================

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });


//   app.all('/*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });


// =================================
// LISTENER
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
// =================================