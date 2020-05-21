const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const usersRoutes = require('./users');
const passport = require('../passport');
const multer = require('multer');
const imageController = require('../controllers/imagesController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

//API Routes
router.use('/api', apiRoutes);

//User Routes
router.use('/users', usersRoutes);

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
      id: req.user._id,
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

//post an image to user profile
router.post('/profileimg/:id', upload.single('profileImg'), (req, res) =>
  imageController.postImage(req, res)
);

router.get('/profileimg/:id', (req, res) => imageController.findById(req, res));

//if no API routes hit, send React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
