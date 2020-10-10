const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");

router.route("/").get(moviesController.findAll).post(moviesController.saveMovie);

router
.route("/title")
.get(moviesController.findById)
.post(moviesController.saveMovie)
.put(moviesController.update)
.delete(moviesController.remove);

router
.route("/user/:email")
.get(moviesController.findAllbyUser);

router.route("/:id")
.get(moviesController.findById)
.put(moviesController.update)
.delete(moviesController.remove);

module.exports = router;