const router = require('express').Router();
const mealController = require('../../controllers/mealsController');

//matches with 'api/meal'
router.route('/').get(mealController.findAll).post(mealController.create);

//matches with '/api/meal/:id'
router
  .route('/:id')
  .get(mealController.findById)
  .put(mealController.update)
  .delete(mealController.remove);

module.exports = router;
