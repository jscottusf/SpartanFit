const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

//matches with 'api/workout/'
router.route("/").get(workoutController.findAll).post(workoutController.create);

//matches with '/api/workout/:id'
router
  .route("/:id")
  .get(workoutController.findById)
  .put(workoutController.update)
  .delete(workoutController.remove)
  .post(workoutController.create);

module.exports = router;
