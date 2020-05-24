const router = require('express').Router();
const likesController = require('../../controllers/likesController');

//api/likes
router.route('/').get(likesController.findAll);

//matches with '/api/likes/:id'
router
  .route('/:id')
  .get(likesController.findById)
  .post(likesController.create)
  .put(likesController.update)
  .delete(likesController.remove);

module.exports = router;
