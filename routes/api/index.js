const router = require("express").Router();
const userRoutes = require("./users");
const workoutRoutes = require("./workouts");
const mealRoutes = require("./meals");
const dataRoutes = require("./data");

router.use("/users", userRoutes);
router.use("/workouts", workoutRoutes);
router.use("/meals", mealRoutes);
router.use("/data", dataRoutes);

module.exports = router;
