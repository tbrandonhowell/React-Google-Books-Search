const router = require("express").Router();
const controller = require("../../controllers/savedBooksController");

router.route("/books")
    .get(controller.findAll)
    .post(controller.create);

router.route("/books/:id")
    .delete(controller.remove)

module.exports = router;