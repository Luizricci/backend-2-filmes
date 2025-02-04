const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/MovieController");

router.get("/movies", MovieController.getAllMovies);
router.post("/Movies", MovieController.addMovie);
router.put("/Movies/:id", MovieController.updateMovie);
router.delete("/Movies/:id", MovieController.deleteMovie);
router.get("/Movies/:id", MovieController.getMovieById);

module.exports = router;