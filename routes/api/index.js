const router = require('express').Router();
const userRoutes = require('./users');
const workoutRoutes = require('./workouts');
const mealRoutes = require('./meals');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/meals', mealRoutes);

module.exports = router;
