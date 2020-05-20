const router = require('express').Router();
const usersRoutes = require('./usersRoutes');

router.use('/', usersRoutes);

module.exports = router;
