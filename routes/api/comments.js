const router = require('express').Router();
const commentsController = require('../../controllers/commentsController');

//matches with 'api/comments'
router
  .route('/')
  .get(commentsController.findAll)
  .post(commentsController.create);

//matches with '/api/comments/:id'
router
  .route('/:id')
  .get(commentsController.findById)
  .put(commentsController.update)
  .delete(commentsController.remove);

module.exports = router;
