const router = require('express').Router();
const usersController = require('../../controllers/usersController');

//matches with 'api/users'
router.route('/').get(usersController.findAll).post(usersController.create);

//matches with '/api/users/:id'
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
