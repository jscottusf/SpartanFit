const router = require("express").Router();
const mealController = require("../../controllers/mealsController");

//matches with 'api/meal'
router.route("/").get(mealController.findAll);

//matches with '/api/meal/:id'
router
  .route("/:id")
  .get(mealController.findById)
  .put(mealController.update)
  .delete(mealController.remove)
  .post(mealController.create);

module.exports = router;
