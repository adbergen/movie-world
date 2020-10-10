const router = require("express").Router();
const movieRoutes = require("./movies");

router.use("/gmes", movieRoutes);

module.exports = router;