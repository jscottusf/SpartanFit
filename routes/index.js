const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const passport = require('../passport');

//API Routes
router.use('/api', apiRoutes);

//user authentication routes
router.get('/user', (req, res, next) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

//matches with 'api/users/login
router.post(
  '/login',
  function (req, res, next) {
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    var userInfo = {
      username: req.user.username,
    };
    res.send(userInfo);
  }
);

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.redirect('/');
  } else {
    res.send({ msg: 'no user to log out' });
  }
});

//if no API routes hit, send React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
