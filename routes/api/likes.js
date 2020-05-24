const router = require('express').Router();
const likesController = require('../../controllers/likesController');

//matches with '/api/likes/:id'
router
  .route('/:id')
  .post(likesController.create)
  .delete(likesController.remove);

module.exports = router;
