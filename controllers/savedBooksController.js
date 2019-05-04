const db = require("../models");

module.exports = {
    findAll: function(req,res){
        db.SavedBooks
            .find(req.query) // where is this req.query coming from? do we need it?
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    addBook: function(req,res){
        db.SavedBooks
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    deleteBook: function(req,res){
        db.SavedBooks
            .findById({ _id: req.params.id }) // shouldn't this be from the body of the post?
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
}