const router = require('express').Router();
const userRoutes = require('./users');
const workoutRoutes = require('./workouts');
const mealRoutes = require('./meals');
const dataRoutes = require('./data');
const postRoutes = require('./posts');
const commentRoutes = require('./posts');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/meals', mealRoutes);
router.use('/data', dataRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
