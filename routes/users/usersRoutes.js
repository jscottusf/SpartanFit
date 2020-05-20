const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router.route('/:slug').get(usersController.findUserbySlug);

module.exports = router;
