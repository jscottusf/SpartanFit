const router = require("express").Router();
const dataController = require("../../controllers/dataController");

//matches with 'api/meal'
router.route("/").get(dataController.findAll).post(dataController.create);

//matches with '/api/meal/:id'
router
  .route("/:id")
  .get(dataController.findById)
  .put(dataController.update)
  .delete(dataController.remove);

module.exports = router;
