const router = require('express').Router();
const commentsController = require('../../controllers/commentsController');

//matches with 'api/comments'
router.route('/').get(commentsController.findAll);

//matches with '/api/comments/:id'
router
  .route('/:id')
  .get(commentsController.findById)
  .post(commentsController.create)
  .put(commentsController.update)
  .delete(commentsController.remove);

module.exports = router;
