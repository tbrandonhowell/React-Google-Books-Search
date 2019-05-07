// TODO: all the to-dos: 
// TODO: do I need to obfuscate my API key?
// TODO: scroll search page to results after results are returned
// TODO: have some sort of spinner show up after submitting search
// TODO: comment out console.logs
// TODO: make view links open in new window
// TODO: give some sort of indication when a book is saved 
// TODO: get rid of the uncaught type error that seems to be triggered by bootstrap
// TODO: store last search in local storage and use to run a default search when someone goes to the search page
// TODO: clear out some of the extra/unused NPM references
// TODO: deploy to heroku  


// =================================
// REQUIRE
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');
// =================================

// =================================
// SERVER
const PORT = process.argv[2] || process.env.PORT || 3001;
const app = express(); // initialize express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// =================================

// =================================
// DATABASE
const db = require("./models");
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/books"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// =================================

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
    console.log("req.body.book:");
    console.log(req.body.book);
    db.SavedBooks.create(req.body.book)
        .then(inserted => {
            console.log("Response received from DB");
            console.log(inserted);
            res.header("Access-Control-Allow-Origin", "*"); // this gets rid of the CORS issue, maybe
            res.json(inserted);
        })
});
// =================================

// =================================
// POST "/api/books/delete" ROUTE - delete a book
app.post("/api/books/delete", (req,res) => {
    console.log("\n\n/api/books/delete POST route requested");
    console.log("req.body:");
    console.log(req.body);
    db.SavedBooks.deleteOne({_id: req.body.id})
        .then(deleted => {
            console.log("Response received from DB");
            console.log(deleted);
            res.header("Access-Control-Allow-Origin", "*"); // this gets rid of the CORS issue, maybe
            res.json(deleted);
        })
});
// =================================

// app.use(express.static('public')); // establish public folder << replacing this per alper
// with this:
// If its production environment!
if (process.env.NODE_ENV === 'production') {
    console.log('production env variable is being recognized')
    app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    });
}
// =================================
// LISTENER
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
// =================================