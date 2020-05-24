const router = require('express').Router();
const followingController = require('../../controllers/followingController');

//matches with 'api/following'
router.route('/').get(followingController.findAll);

//matches with '/api/following/:id'
router
  .route('/:id')
  .get(followingController.findById)
  .post(followingController.create)
  .put(followingController.update)
  .delete(followingController.remove);

module.exports = router;
