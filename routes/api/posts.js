const router = require('express').Router();
const postsController = require('../../controllers/postsController');

//matches with 'api/posts'
router.route('/').get(postsController.findAll);

//matches with '/api/posts/:id'
router
  .route('/:id')
  .get(postsController.findById)
  .post(postsController.create)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;
